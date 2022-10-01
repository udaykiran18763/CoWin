// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {itemDetails} = props

  return (
    <div className="division-container">
      <h1 className="heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={itemDetails}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill=" #f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill=" #2cc6c6" />
          </Pie>
          <Legend iconType="square" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
