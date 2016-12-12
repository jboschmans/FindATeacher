class AuthCtrl{
  constructor($state, $window){
    'ngInject';

    this.$window = $window;

    this.title = $state.current.title;
    this.isSubmitting = false;
    this.errors = [];
    this.submitData = {
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

  submit(){
    this.isSubmitting = true;
    console.log(this.submitData);

    this.errors = this.validate();

    if (this.errors.length > 0){
      this.isSubmitting = false;
      this.$window.scrollTo(0,0);
      return;
    }

    if (this.title === "Aanmelden") this.aanmelden();
    else if (this.title === "Registreren") this.registreren();

    this.isSubmitting = false;
  }

  validate(){
    var e = [];

    if (this.title === "Aanmelden"){
      if (!this.submitData.email || this.submitData.email.length < 1) e.push("Gelieve een emailadres in te vullen");
      if (!this.submitData.wachtwoord || this.submitData.wachtwoord.length < 6) e.push("Gelieve een wachtwoord van minstens 6 karakters in te vullen");
    } else if (this.title === "Registreren"){
      if (!this.submitData.name || this.submitData.name.length < 1) e.push("Gelieve uw naam in te vullen");
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
    console.log("Aanmelden");
  }

  registreren(){
    console.log("Registreren");
  }
}

export default AuthCtrl
