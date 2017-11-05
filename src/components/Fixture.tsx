import * as React from 'react'
import { Image } from 'semantic-ui-react'

const Fixture: React.StatelessComponent<{ message: string }> = ({
  message
}) => (
  <div>
    <span>MUN</span>
    <Image avatar={true} src="http://fillmurray.com/200/200" />
    1 - 0
    <Image avatar={true} src="http://fillmurray.com/200/200" />
    <span>TOT</span>
  </div>
)

export default Fixture
