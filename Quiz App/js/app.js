
var Data = [
    ["Which of the following country is not the member of UNO?",' Vatican City ' ,' Afghanistan',' Vaitnam','A'],
    ['The Great Wall of China is about _______ KM long.',' 18,196',' 19,196',' 21,196','C'],
    ['The United Nation was founded on?' ,' March 24, 1945',' October 24, 1945 ',' October 24, 1949','B'],
    ['The SI Unit of charge is?',' Ampere',' Coulumb',' Ohm','B'],
    ['A device which converts chemical energy into electrical energy is called?',' Generator',' Motor',' Battery','C']

] ;

var  idx = 0, correctAnswer = 0 , checkedAnswer ,score;



var attemptQuiz = React.createClass({
      


     getInitialState: function(){
         return{
             correctAnswer: this.props.correctAnswer,
             idx: this.props.idx,
             question: this.props.data[idx][0],
             option1: this.props.data[idx][1],
             option2: this.props.data[idx][2],
             option3: this.props.data[idx][3],
             answer: this.props.data[idx][4],
         }
     },
  
     _checkQuestion: function(e){
          options = document.getElementsByName('option');
          for (var i = 0; i < options.length; i++) {
          if(options[i].checked){
              checkedAnswer = options[i].value;
          }
       }
            if(checkedAnswer == this.state.answer){
                this.setState({
                    correctAnswer: correctAnswer++,
                })
            }
          this.setState({
            idx: ++idx,
          }) 
          if(idx < this.props.data.length){
              this.setState({
               
             question: this.props.data[idx][0],
             option1: this.props.data[idx][1],
             option2: this.props.data[idx][2],
             option3: this.props.data[idx][3],
             answer: this.props.data[idx][4],
            
        })
          }

     },

    _displayQuestion: function(){
           
            if(this.state.idx >= this.props.data.length){
               score = correctAnswer*20;
              return React.DOM.div({className:"container text-center"},
                      React.DOM.h2(null, "RESULT"),
                      React.DOM.h3(null, "Percentage: " + score + "%"),
                      React.DOM.h3(null, "Correct Answers: " + correctAnswer)
                 )
             } 
        else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(null,
                        React.DOM.h2({className:"text-center"},"Question "+ (this.state.idx+1) +" of " +this.props.data.length )
                          ),
                         React.DOM.h3({style:{marginLeft:"2em"}},
                                   "Question:" +  (this.state.idx+1) +'. '+this.state.question),
                         React.DOM.div(
                             {style:{fontSize:"18px",marginLeft:"2em"}},
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'option',
                                    value:'A'
                                 }
                             ),
                              this.state.option1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'option',
                                    value:'B'
                                 }
                             ),
                             this.state.option2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'option',
                                    value:'C'
                                 }
                             ),
                             this.state.option3
                         ),
                      React.DOM.br(null),
                         React.DOM.button(  
                                 {
                                    type: "button",
                                     className: "btn-success",
                                     style:{fontSize:"17px", fontWeight:"bold", padding:"6px 25px 6px 25px",marginLeft:"35em",borderRadius:"10px"},
                                    onClick: this._checkQuestion
                                 },
                                 'Next'
                             )
                     );
             }
     },

_footer: function(){
    return React.DOM.div({className:"panel-footer navbar-fixed-bottom"}, "Copyrights: Syed Kashan Ali",
                  React.DOM.a({href:"mailto:kashanali592@gmail.com",target:"_blank", className:"pull-right"},"Kindly give me your feedback."))
},
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( {className:"panel-heading bg-primary"},
                    React.DOM.h1({className:"text-center"},"QUIZ APP ON REACT")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(null,
                     this._displayQuestion(), 
                    this._footer()
                  )  
             )
         )
     }
});


ReactDOM.render(
    React.DOM.div(
       null,
       React.createElement(attemptQuiz,
       {
           data: Data,
           idx: idx,
           correctAnswer: correctAnswer,
       }
       )
    ),
    document.getElementById('app')
);