import React , {useEffect , useState} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { API } from '../../api/api'
import "./style.scss"

const index = () => {

    const [data , setData] = useState([]);

    const {names} = useParams()
    const goback = useNavigate()

    useEffect(()=> {
        API.getItem(names).then((res)=> setData(res.data[0]))
    }, [names])

    const { flag, population, capital, region, name } = data;

  return (
    <div className='container'>
        <div className="row">
            <div className="col p-3">
                <button className="btn btn-danger" onClick={()=> goback(-1)}>
                    go back
                </button>
            </div>
        </div>
        <div className="row p-5 d-grid">
            <div >
                <h5>{name}</h5>
                    <img src={flag} alt={region} style={{width:"330px"}}/>
            </div>
            <div >
                <ul className="list-group">
                    <li className="list-group-item">Population: <strong>{population}</strong></li>
                    <li className="list-group-item">Region: <strong>{region}</strong></li>
                    <li className="list-group-item">Capital: <strong>{capital}</strong></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default index