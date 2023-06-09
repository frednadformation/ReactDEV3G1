import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

function DataFetchProducts() {

    const initialState = {
        loading: true,
        error: '',
        produits: {}
    };

    const reducer = (state, action ) => {
        switch(action.type) {
            case 'FETCH_SUCCESS':
                return{
                    loading : false,
                    produits : action.payload,
                    error : ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading : false,
                    produits: {},
                    error : 'something went wrong'
                }
            default : 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://mocki.io/v1/78c793c7-58cb-416f-b2ca-d5d737f7c17e')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.products})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    })

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Titre Produit</th>
                    <th>Description</th>
                    <th>Catégorie</th>
                    <th>Photos</th>
                </tr>
            </thead>
            <tbody>
                {state.loading ? 'Loading...' : state.produits.map((produit, index)=>{
                    return(
                        <React.Fragment key={index}>
                            <tr>
                                <td>{produit.title}</td>
                                <td>{produit.description}</td>
                                <td>{produit.category}</td>
                                <td><img src={produit.thumbnail} /></td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </tbody>

        </table>
    </div>
  )
}

export default DataFetchProducts