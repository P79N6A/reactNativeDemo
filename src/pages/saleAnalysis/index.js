import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'

type Props = {}

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]
export default class SaleAnalysis extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
