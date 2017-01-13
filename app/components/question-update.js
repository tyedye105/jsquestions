import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    showUpdateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      debugger;
      var params ={
        content: this.get('content'),
        author: this.get('author'),
        topic: this.get('topic'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
