//Index.js do Time
import Colaborador from '../Colaborador/Colaboradores'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (

        ( props.colaboradores.length > 0 ) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}> {props.nome}</h3>
          
          <div className='colaboradores'>

            {props.colaboradores.map(colaborador =>
                <Colaborador corDeFundo ={props.corPrimaria}key={colaborador.nome} nome={colaborador.nome}
                    profissao={colaborador.profissao}
                    imagem={colaborador.imagem}

                />)}
               </div>
        </section>
         : ''
    )

}
export default Time