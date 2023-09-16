import axios from 'axios';
import { isError } from 'lodash';
import { useEffect, useState } from 'react';

const useDetails = (which, id) => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const API = '3d820eab8fd533d2fd7e1514e86292ea';

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `
                    https://api.themoviedb.org/3/${which}/${id}?api_key=${API}&language=en-US`
                );

                setDetails(data);
                setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
        };

        fetchPopularVideos();

        // CLEANUP

        return () => {
            setLoading(true);
            isError(false);
            setDetails({});
        };
    }, [id, which]);

    return { details, loading, error };
};

export default useDetails;
