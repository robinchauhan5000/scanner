import * as React from 'react'
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={47} height={47} fill='none' {...props}>
    <Circle cx={23.5} cy={23.5} r={23.5} fill='url(#a)' />
    <G
      clipPath='url(#b)'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path
        d='M18.8 12.925h-3.525a2.35 2.35 0 0 0-2.35 2.35V18.8m21.15 0v-3.525a2.35 2.35 0 0 0-2.35-2.35H28.2m0 21.15h3.525a2.35 2.35 0 0 0 2.35-2.35V28.2m-21.15 0v3.525a2.35 2.35 0 0 0 2.35 2.35H18.8'
        strokeWidth={2.35}
      />
      <Path
        d='M23.496 17.625v.734-.734Zm4.404 8.807h1.468H27.9Zm-2.936 0h-1.468v2.936l1.468-2.936Zm-1.468-5.137v2.201-2.201Zm0 2.201h.008-.008Zm0 0h2.943-2.943Zm2.936 5.872h2.936-2.936Zm-8.807-5.872h2.936-2.936Zm11.743 0h.007-.007Zm-11.01-2.935h1.469a.734.734 0 0 0 .734-.734v-1.468a.734.734 0 0 0-.734-.734h-1.468a.734.734 0 0 0-.734.734v1.468a.734.734 0 0 0 .734.734Zm8.808 0h1.468a.734.734 0 0 0 .734-.734v-1.468a.734.734 0 0 0-.734-.734h-1.468a.734.734 0 0 0-.734.734v1.468a.734.734 0 0 0 .734.734Zm-8.807 8.807h1.468a.734.734 0 0 0 .734-.734v-1.468a.734.734 0 0 0-.734-.734h-1.468a.734.734 0 0 0-.734.734v1.468a.734.734 0 0 0 .734.734Z'
        strokeWidth={1.175}
      />
    </G>
    <Defs>
      <LinearGradient
        id='a'
        x1={23.5}
        y1={0}
        x2={23.5}
        y2={47}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#4F58CF' />
        <Stop offset={1} stopColor='#83D1D8' />
      </LinearGradient>
      <ClipPath id='b'>
        <Path
          fill='#fff'
          transform='translate(11.75 11.75)'
          d='M0 0h23.5v23.5H0z'
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
