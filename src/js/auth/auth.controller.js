class AuthCtrl{
  constructor($state, $window, $http, AppConstants, User){
    'ngInject';

    this.$state = $state;
    this.$window = $window;
    this.$http = $http;
    this.AppConstants = AppConstants;
    this.User = User;

    this.title = $state.current.title;
    this.isSubmitting = false;
    this.errors = [];

    if (this.title === "Advertentie aanpassen"){
      // Controle aangemeld
      if (!this.User.currentID) this.$state.go('app.login');
      else {
        this.$http({
          url: this.AppConstants.api + "id/" + this.User.currentID,
          method: 'GET'
        }).then(
          res => {
            if (!res.data.id) this.$state.go('app.login');
            else {
              this._id = res.data._id;
              this.id = res.data.id;
              this.submitData = {
                naam: res.data.naam,
                email: res.data.email,
                wachtwoord: res.data.wachtwoord,
                wachtwoord2: res.data.wachtwoord,
                titel: res.data.titel,
                plaats: res.data.plaats,
                uitleg: res.data.uitleg,
                prijs: res.data.prijs,
                leerkrachtThuis: res.data.afspraakManieren.leerkrachtThuis,
                leerlingThuis: res.data.afspraakManieren.leerlingThuis,
                videochat: res.data.afspraakManieren.videochat,
                contactEmail: res.data.contact.email,
                contactWebsite: res.data.contact.website,
                contactTelefoon: res.data.contact.telefoon
              }
            }
          },
          err => {
            this.errors.push("Er is iets misgelopen");
          }
        )
      }
    } else {
      this.submitData = {
        naam: "",
        email: "",
        wachtwoord: "",
        wachtwoord2: "",
        titel: "",
        plaats: "",
        uitleg: "",
        prijs: 0.0,
        leerkrachtThuis: false,
        leerlingThuis: false,
        videochat: false,
        contactEmail: "",
        contactWebsite: "",
        contactTelefoon: ""
      }
    }
  }

  submit(){
    this.isSubmitting = true;
    //console.log(this.submitData);

    this.errors = this.validate();

    if (this.errors.length > 0){
      this.isSubmitting = false;
      this.$window.scrollTo(0,0);
      return;
    }

    if (this.title === "Aanmelden") {
      this.aanmelden();
    }else if (this.title === "Registreren") {
      this.registreren();
    }else if (this.title === "Advertentie aanpassen") {
      this.aanpassen();
    }

    //this.isSubmitting = false;
  }

  validate(){
    var e = [];

    if (this.title === "Aanmelden"){
      if (!this.submitData.email || this.submitData.email.length < 1) e.push("Gelieve een emailadres in te vullen");
      if (!this.submitData.wachtwoord || this.submitData.wachtwoord.length < 6) e.push("Gelieve een wachtwoord van minstens 6 karakters in te vullen");
    } else {
      if (!this.submitData.naam || this.submitData.naam.length < 1) e.push("Gelieve uw naam in te vullen");
      if (!this.submitData.email || this.submitData.email.length < 1) e.push("Gelieve een emailadres in te vullen");
      if (!this.submitData.wachtwoord || this.submitData.wachtwoord.length < 6) e.push("Gelieve een wachtwoord van minstens 6 karakters in te vullen");
      else if (!this.submitData.wachtwoord2 || this.submitData.wachtwoord2.length < 6) e.push("Gelieve een controlewachtwoord in te vullen");
      else if (this.submitData.wachtwoord !== this.submitData.wachtwoord2) e.push("Het wachtwoord en controlewachtwoord komen niet overeen");
      if (!this.submitData.titel || this.submitData.titel.length < 1) e.push("Gelieve een titel in te vullen");
      if (!this.submitData.plaats || this.submitData.plaats.length < 1) e.push("Gelieve een woonplaats in te vullen");
      if (!this.submitData.uitleg || this.submitData.uitleg.length < 1) e.push("Gelieve een beschrijving in te vullen");
      if (!this.submitData.prijs || this.submitData.prijs.length <= 0) e.push("Gelieve een prijs per uur in te vullen");
      if (!this.submitData.leerkrachtThuis && !this.submitData.leerlingThuis && !this.submitData.videochat) e.push("Gelieve minstens één van de afspraakmanieren aan te duiden");
      if ((this.submitData.contactEmail.length < 1 || !this.submitData.contactEmail)
        && (this.submitData.contactTelefoon.length < 1 || !this.submitData.contactTelefoon)
        && (this.submitData.contactWebsite.length < 1 || !this.submitData.contactWebsite)) e.push("Gelieve minstens één van de contactmanieren in te vullen");
    }

    return e;
  }

  aanmelden(){
    this.$http({
      url: this.AppConstants.api + "login/" + this.submitData.email,
      method: 'GET'
    }).then(
      res => {
        if (!res.data.email) this.errors.push("Het ingegeven emailadres heeft geen account");
        else if (res.data.wachtwoord !== this.submitData.wachtwoord) this.errors.push("Het ingegeven wachtwoord is niet correct");
        else {
          this.User.currentID = res.data.id;
          this.$state.go('app.aangemeld');

          // TODO doorverwijzen naar aangemeld pagina
          // + id opvragen via server en bijhouden in user service
        }
        this.isSubmitting = false;
      },
      err => {
        this.errors.push("Er is iets fout gelopen");
      }
    );
  }

  registreren(){
    var obj = {
      id: this.hashCode(),
      naam: this.submitData.naam,
      email: this.submitData.email,
      wachtwoord: this.submitData.wachtwoord,
      plaats: this.submitData.plaats,
      titel: this.submitData.titel,
      uitleg: this.submitData.uitleg,
      prijs: this.submitData.prijs,
      afspraakManieren: {
        leerkrachtThuis: this.submitData.leerkrachtThuis,
        leerlingThuis: this.submitData.leerlingThuis,
        videochat: this.submitData.videochat
      },
      contact: {
        email: this.submitData.contactEmail,
        telefoon: this.submitData.contactTelefoon,
        website: this.submitData.contactWebsite
      }
    };

    this.$http({
      url: this.AppConstants.restApi,
      data: JSON.stringify(obj),
      method: 'POST',
      contentType: "application/json"
    }).then(
      res => {
        this.$state.go('app.bekijken', {id: obj.id});
      }, err => {console.log(err);}
    );
  }

  aanpassen(){
    var obj = {
      id: this.id,
      naam: this.submitData.naam,
      email: this.submitData.email,
      wachtwoord: this.submitData.wachtwoord,
      plaats: this.submitData.plaats,
      titel: this.submitData.titel,
      uitleg: this.submitData.uitleg,
      prijs: this.submitData.prijs,
      afspraakManieren: {
        leerkrachtThuis: this.submitData.leerkrachtThuis,
        leerlingThuis: this.submitData.leerlingThuis,
        videochat: this.submitData.videochat
      },
      contact: {
        email: this.submitData.contactEmail,
        telefoon: this.submitData.contactTelefoon,
        website: this.submitData.contactWebsite
      }
    };

    this.$http({
      url: this.AppConstants.restApiNoKey + this._id + this.AppConstants.restApiOnlyKey,
      data: JSON.stringify(obj),
      method: 'PUT',
      contentType: "application/json"
    }).then(
      res => {
        this.$state.go('app.bekijken', {id: obj.id});
      }, err => {console.log(err);}
    )
  }

  hashCode(){
    return Math.random().toString(36).substring(2, 12);
  }
}

export default AuthCtrl
