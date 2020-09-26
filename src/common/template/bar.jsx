import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Novos usuarios', 'Novas contas premium', 'Anuncios novos', 'Anuncios fechados'],
        datasets: [
          {
            label: 'Monitoramento de anuncios e contas',
            data: [
              120,
              20,
              500,
              320
            ],
            backgroundColor: [
              'rgba(246, 92, 15, 0.6)',
              'rgba(15, 187, 246, 0.6)',
              'rgba(120, 246, 15, 0.6)',
              'rgba(248, 252, 0, 0.6)'

            ]
          }
        ],


      }
    }
  }


  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Monitoramento de anuncios e contas',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            layout:{
              padding:{
                right:600
              }
            }

          }}
          width={600}
          
        />


      </div>
    )
  }
}

export default Chart;