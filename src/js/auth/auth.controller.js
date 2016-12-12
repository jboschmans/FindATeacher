class AuthCtrl{
  constructor($state){
    'ngInject';

    this.title = $state.current.title;
    this.isSubmitting = false;
  }

  submit(){
    this.isSubmitting = true;
    console.log(this.submitData);

    this.isSubmitting = false;
  }
}

export default AuthCtrl
