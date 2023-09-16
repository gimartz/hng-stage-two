import axios from 'axios';

const API='3d820eab8fd533d2fd7e1514e86292ea';

const requests=  {
    fetchOrginal: `https://api.themoviedb.org/3/discover/tv?api_key=${API}&language=en-US&with_networks=213`,
    
}
export default requests