
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getCastById } from "components/ApiService";
import css from 'components/Cast/Cast.module.css';

const Cast  = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (cast.length>0) {
        return
        }
        const fetchCast = async () => {
            try {
                const responseCast = await getCastById(id);
                setCast(responseCast);

            } catch (error) {
                console.log(error);
            }
        }
        fetchCast();
    }, [id, cast.length]);


    if (cast.length === 0) {
        return (<p>Cast is not found.</p>)
    }

    const actors = cast.map(({ name, profile_path, character }) => {
        return (
            <li key={nanoid()}>
                {profile_path && <img
                    className={css.cast__profile}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name} />}
                <h4>{name}</h4>
                <p>{ `Character: ${character}`}</p>
            </li>
        )
    })
        
    return (  
        <ul>
        {actors}
        </ul>
    )
}

export default Cast;