import { useEffect, useState } from "react";
import { getGiffs } from '../helpers/getGiffs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGiffs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    return state;
};
