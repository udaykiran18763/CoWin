// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {itemDetails} = props

  return (
    <div className="division-container">
      <h1 className="heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={itemDetails}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name={`${itemDetails[0].age}`} fill=" #2d87bb" />
            <Cell name={`${itemDetails[1].age}`} fill=" #a3df9f" />
            <Cell name={`${itemDetails[2].age}`} fill=" #64c2a6" />
          </Pie>
          <Legend iconType="square" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
