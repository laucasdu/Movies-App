import { Component } from "react";

export class MovieForm extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            newMovie: this.props.editedMovie,
            editActive: this.props.editActive,
        }
    }




   onInputChange = (e) => { 

        let name= e.target.name; 
        let value = e.target.value;

        this.setState({newMovie:{...this.state.newMovie,[name]:value}})

    }

    

    onSubmitHandler = (e) => {
     e.preventDefault();
    
    if (this.state.newMovie.title.lenght > 0) {
        !this.state.editActive ? 
        this.props.addNewMovie(this.state.newMovie)
        : this.props.updateMovie(this.state.newMovie)
    }
    
    this.resetInputsForm();
    };


    //Extraxt to method
    resetInputsForm = () => {
        
        this.setState({newMovie:{id: '', title:'', year:'', genre:'', imgUrl: ''}})

    };
   
    

    render() {
        return (<section className="form">
                
                <form onSubmit={this.onSubmitHandler} className="containerForm">
                    <input type="text" onChange={this.onInputChange} value={this.state.newMovie.title} name="title" placeholder="Title"/>
                    <input type="text" onChange={this.onInputChange} value={this.state.newMovie.year} name="year" placeholder="Year"/>
                    <input type="text" onChange={this.onInputChange} value={this.state.newMovie.genre} name="genre" placeholder="Genres"/>
                    <input type="text" onChange={this.onInputChange} value={this.state.newMovie.imgUrl} name="img URL" placeholder="Image URL"/>

                {this.state.editActive?
                <button type="sudmit" className="button_update">UPDATE</button>
                : <button type="sudmit" className="button_create">CREATE</button>
                }
                
                </form>
            </section>
            );
        }
     }