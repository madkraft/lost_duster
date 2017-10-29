import React, { Component } from "react";
import { Image, List } from 'semantic-ui-react'

class FixturePage extends Component {
  render() {
    return (
      <List divided verticalAlign='middle' relaxed="very" size='big'>
        <List.Item>
          <List.Content>
            <span>MUN</span>
            <Image avatar src='http://fillmurray.com/200/200' />
            1 - 0
            <Image avatar src='http://fillmurray.com/200/200' />
            <span>TOT</span>
          </List.Content>
        </List.Item>
        <List.Item>
          <span>MUN</span>
          <Image avatar src='http://fillmurray.com/200/200' />
          1 - 0
          <Image avatar src='http://fillmurray.com/200/200' />
          <span>TOT</span>
        </List.Item>
      </List>
    )
  }
}

export default FixturePage;
