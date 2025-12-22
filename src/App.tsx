import './App.css'
import { Grid } from '@mui/material'
import HeaderUI from './components/HeaderUI'
import AlertUI from './components/AlertUI'
import SelectorUI from './components/SelectorUI'
//import IndicatorUI from './components/IndicatorUI'
import useFetchData from './functions/useFetchData';
import TableUI from './components/TableUI'; 
import ChartUI from './components/ChartUI'; 
import { useState } from 'react'

function App() {


  const [selectedOption, setSelectedOption] = useState<string>("Guayaquil");
  const {data,loading,error} = useFetchData(selectedOption);
  
  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center">

      {/* HEADER */}
  <Grid size={12}>
    <HeaderUI />
  </Grid>

  {/* ALERTA + SELECTOR */}
  <Grid container size={12} spacing={2} alignItems="center">
  
  {/* ALERTA 3/4 */}
  <Grid size={{ xs: 12, md: 3 }}>
    <AlertUI description="No se prevén lluvias" />
  </Grid>

  {/* SELECTOR 1/4 */}
  <Grid size={{ xs: 12, md: 9 }}>
    <SelectorUI onOptionSelect={setSelectedOption} />
  </Grid>

</Grid>

  {/* INDICADORES */}
  <Grid container size={12} spacing={3} className="section">

    {loading && <h2>Cargando datos...</h2>}
    {error && <h2 style={{ color: "red" }}>{error}</h2>}

    {data && (
      <>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className="indicator-card">
            <div className="indicator-title">Temperatura (2m)</div>
            <div className="indicator-value">
              {data.current.temperature_2m} {data.current_units.temperature_2m}
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <div className="indicator-card">
            <div className="indicator-title">Temperatura aparente</div>
            <div className="indicator-value">
              {data.current.apparent_temperature} {data.current_units.apparent_temperature}
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <div className="indicator-card">
            <div className="indicator-title">Velocidad del viento</div>
            <div className="indicator-value">
              {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <div className="indicator-card">
            <div className="indicator-title">Humedad relativa</div>
            <div className="indicator-value">
              {data.current.relative_humidity_2m} {data.current_units.relative_humidity_2m}
            </div>
          </div>
        </Grid>
      </>
    )}
  </Grid>

  {/* GRÁFICO Y TABLA */}
  <Grid container size={12} spacing={3} className="section">
    <Grid size={{ xs: 12, md: 6 }}>
      <div className="panel">
        <ChartUI data={data} loading={loading} error={error} />
      </div>
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <div className="panel">
        <TableUI data={data} loading={loading} error={error} />
      </div>
    </Grid>
  </Grid>

    </Grid>
  )
}

export default App