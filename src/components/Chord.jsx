import React from 'react'
import { getNamedTonic, head } from '../helpers'

import styled from 'styled-components/macro'

const StyledChord = styled.div`
	font-size: 27px;
	margin-bottom: 20px;
`

function Chord({ notes }) {
	const tonic = getNamedTonic(head(notes))

  return (
		<div>
			<StyledChord>
				{tonic &&
					<span>{ `Chord: ${tonic}`}</span>
				}
			</StyledChord>
		</div>
	)
}

export default Chord
