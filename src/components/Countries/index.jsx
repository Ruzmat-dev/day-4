import React, { useState, useEffect } from 'react'
import { API } from '../../api/api'
import Card from "../../UI/Card"
import "./style.scss"

const index = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categry, setCategry] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        API.getAll().then((response) => {
            setData(response.data)
            if (response.data) {
                setLoading(true)
                response.data.forEach((el) => {
                    if (!categry.includes(el.region)) {
                        categry.push(el.region)
                        setCategry(categry)
                    }
                })
            }
        })
    }, [])

    const filterCountres = (country) => {
        API.filterCountres(country).then((response) => setData(response.data))
    }

    const searchByName = (text) => {
        API.searchByname(text).then((response) => setData(response.data)).catch((err) => alert("bunakasi yooo"))
    }

    if (!loading) {
        return <div class="universe">
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
        </div>

    }
    // console.log(categry);
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-6 d-flex justify-content-end">
                        <input type="text" className="form-control w-50 rounded-4  " placeholder='enter country name' onChange={(i) => { searchByName(i.target.value) }} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-start">
                        <select className='form-select w-50 p-3 rounded-4' onChange={(e) => filterCountres(e.target.value)}>
                            <option  selected disabled>Filter by Region</option>
                            {
                                categry.sort().map((item) => {
                                    return <option key={item} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-12">
                        <h3 className="text-center p-5 allContrist">
                            All contrist
                        </h3>
                        <div className="wrapper">
                            {
                                data.length > 0 ? data.map((el) => {
                                    return <Card data={el} key={el.name} />
                                }) : "<h4>Page not Found</h4>"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index