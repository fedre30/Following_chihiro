import DialogManager from './dialog';

class StateManager{

  switchToState(state){
    DialogManager.clearChoices();
    DialogManager.clearText();
    state();
  }
}