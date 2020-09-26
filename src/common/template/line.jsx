import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart_1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          chartData: {
              labels:['seg','ter','qua',' qui', 'sex', 'sab', 'dom'],
              datasets: [
                  {
                  label:'Lucro do dia em reais',
                  data: [
                      12,
                      20,
                      29,
                      57,
                      67,
                      90,
                      120

                  ],
                  backgroundColor:[
                    'rgb(15, 216, 195 )',

                  ]
                }
              ],
              options: {
                  layout: {
                      padding:{
                          bottom:500
                      }
                  }
              }
              
              
          }
        }
      }
    
    
      render(){
        return (
          <div className="chart">
            <Line
              data={this.state.chartData}
              options={{
                title:{
                  display:true,
                  text:'Lucros da semana',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                },
                layout: {
                  padding:{
                      right:200,
                     
                  }}
            
                    
                
              }}
              width={600}
            />
    
           
          </div>
        )
      }
    }

export default Chart_1;