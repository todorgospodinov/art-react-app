import { useState, useEffect } from 'react';

import * as artService from '../services/artService';

const useArtState = (artId) => {
    const [art, setArt] = useState({});

    useEffect(() => {
        artService.getOne(artId)
            .then(artResult => {
                setArt(artResult);
            })
    }, [artId]);

    return [
        art,
        setArt
    ]
};

export default useArtState;