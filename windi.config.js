import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FABD14',
          1: '#F4BE4F',
          2: '#FADB14',
          3: '#FAEC57',
          4: 'rgba(250, 219, 20, 0.16)',
        },
        gray: {
          7: 'rgba(0, 0, 0, 0.04)',
          6: 'rgba(0,0,0,0.08)',
          5: 'rgba(0,0,0,0.16)',
          4: 'rgba(0,0,0,0.24)',
          3: 'rgba(0,0,0,0.56)',
          2: 'rgba(0,0,0,0.64)',
          1: 'rgba(0,0,0,0.88)',
          // 这里根据透明度做一下映射，方便codesign在没有symbol时使用
          '04': 'rgba(0, 0, 0, 0.04)',
          '08': 'rgba(0,0,0,0.08)',
          16: 'rgba(0,0,0,0.16)',
          24: 'rgba(0,0,0,0.24)',
          56: 'rgba(0,0,0,0.56)',
          64: 'rgba(0,0,0,0.64)',
          88: 'rgba(0,0,0,0.88)',
        },
        white: {
          DEFAULT: '#FFF',
          3: 'rgba(255,255,255,0.24)',
          2: 'rgba(255,255,255,0.64)',
          1: 'rgb(255,255,255)',
        },
        green: '#0CBD6AFF',
        red: '#F54545',
        blue: '#3089F0FF',
        orange: '#FFA338FF',
        purple: {
          DEFAULT: '#8387EB',
          hover: '#AAAEF2',
          press: '#5F5FE3',
        },
        link: {
          normal: '#3089F0',
          hover: '#57A5F2',
          active: '#2970C2',
          disable: '#0000003D',
        },
      },
      fontFamily: {
        wechat: 'WeChat',
      },
      fontSize: {
        6: '34px',
        5: '26px',
        4: '20px',
        3: '16px',
        2: '14px',
        1: '12px',
        // 方便使用
        34: '34px',
        26: '26px',
        20: '20px',
        16: '16px',
        14: '14px',
        12: '12px',
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
      },
      lineHeight: {
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      boxShadow: {
        DEFAULT: 'rgba(0, 0, 0, 0.2) 0px 20px 30px;',
      },
      borderRadius: {
        1: '4px',
        2: '8px',
      },
    },
  },
  plugins: [require('windicss/plugin/aspect-ratio')],
  preflight: true,
})
