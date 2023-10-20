import React, {useEffect, useState} from 'react';
import { BarChart } from '@mui/x-charts';

const PokemonGraph = ({stats}) => {
    const [pData, setPData] = useState([0]);
    const xLabels = [
        'PV',
        'Attaque',
        'Défense',
        'Spécial\nAttaque',
        'Spécial\nDéfense',
        'Vitesse'
    ];
    useEffect(() => {
        let res = [];
        stats.map(stat => {
            res.push(stat.base_stat)
        })
        setPData(res)
    }, []);

    return <>
        <BarChart
            width={500}
            height={300}
            series={[
                { data: pData, id: 'pvId', stack: 'total' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    </>;
};

export default PokemonGraph;