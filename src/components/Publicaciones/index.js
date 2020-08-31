import React, { Component } from 'react'
import {connect} from 'react-redux';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const {traerTodos: usuariosTraerTodos} = usuariosActions
const {traerPorUsuario: publicacionesTraerPorUsuario} = publicacionesActions

class Publicaciones extends Component {
    async componentDidMount(){
        const {
            usuariosTraerTodos,
            publicacionesTraerPorUsuario,
            match: { params: {key} }
        } = this.props;

        if(!this.props.usuariosReducer.usuarios.length){
            await usuariosTraerTodos()
        }
        if(!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])){
            publicacionesTraerPorUsuario(key)
        }
    }

    ponerUsuario = () => {
        const {
            usuariosReducer,
            match: { params: {key} }
        }
    }
    render() {
        return (
            <div>
                <h1>Publicaciones de </h1>
                {this.props.match.params.key}
            </div>
        )
    }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
    return {
        usuariosReducer,
        publicacionesReducer
    };
}

const mapDispatchToProps = {
    usuariosTraerTodos,
    publicacionesTraerPorUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
