
const theme = {
    colors: {
        gray00 :    '#ffffff',//	흰색
        gray100 :   '#f7f8f9',	//가장 밝은 회색
        gray200 :   '#f3f4f5',	//매우 밝은 회색
        gray300 :   '#eeeff1',	//밝은 회색
        gray400 :   '#dcdee3',	//연한 회색
        gray500 :   '#d1d3d8',	//중간 밝은 회색
        gray600 :	'#b0b3ba',	//중간 회색
        gray700 :	'#868b94',	//진한 회색
        gray800 :	'#555d6d',	//매우 진한 회색
        gray900 :	'#2a3038',	//거의 검은색
        gray1000 :	'#1a1c20',//	검은색
        
        //Yellow 계열 (카카오 브랜드 컬러)
        yellow00 :	'   #fffef9',	//가장 밝은 노란색
        yellow100 :	'   #fffce5',	//매우 밝은 노란색
        yellow200 :	'   #fff8b7',	//밝은 노란색
        yellow300 :	'   #fff38a',	//연한 노란색
        yellow400 :	'   #ffef5c',	//중간 밝은 노란색
        yellow500 :	'   #ffea2e',	//중간 노란색
        yellow600 :	'   #fee500',	//카카오 메인 노란색
        yellow700 :	'   #d5c000',	//진한 노란색
        yellow800 :	'   #ac9b00',	//매우 진한 노란색
        yellow900 :	'   #847700',	//어두운 노란색
        yellow1000 :'   #5b5200',	//가장 어두운 노란색
        //Brown 계열
        brown00 :	'   #fff9f4',	//가장 밝은 갈색
        brown100 :	'   #ffeedc',	//매우 밝은 갈색
        brown200 :	'   #ffe2c4',	//밝은 갈색
        brown300 :	'   #f9d0a8',	//연한 갈색
        brown400 :	'   #edbc8a',	//중간 밝은 갈색
        brown500 :	'   #cb9a69',	//중간 갈색
        brown600 :	'   #a97b4d',	//진한 갈색
        brown700 :	'   #875e35',	//매우 진한 갈색
        brown800 :	'   #654321',	//카카오 브라운
        brown900 :	'   #432a12',	//어두운 갈색
        brown1000 :	'   #2d1b08',	//가장 어두운 갈색
        //Blue 계열
        blue00 :	'  #f8faff',	//	가장 밝은 파란색
        blue100 :	'	#eff6ff',	//	매우 밝은 파란색
        blue200 :	'	#e2edfc',	//	밝은 파란색
        blue300 :	'	#cbdffa',	//	연한 파란색
        blue400 :	'	#aacefd',	//	중간 밝은 파란색
        blue500 :	'	#85b8fd',	//	중간 파란색
        blue600 :	'	#5e98fe',	//	진한 파란색
        blue700 :	'	#217cf9',	//	매우 진한 파란색
        blue800 :	'	#135fcd',	//	어두운 파란색
        blue900 :	'	#0b4596',	//	매우 어두운 파란색
        blue1000 :	'	#032451',	//	가장 어두운 파란색
        //Red 계열
        red00 : 	'	#fffafa',	//	가장 밝은 빨간색
        red100 :	'	#fdf0f0',	//	매우 밝은 빨간색
        red200 :	'	#fde7e7',	//		밝은 빨간색
        red300 :	'	#fed4d2',	//		연한 빨간색
        red400 :	'	#feb7b3',	//		중간 밝은 빨간색
        red500 :	'	#fe928d',	//		중간 빨간색
        red600 :	'	#fc6a66',	//		진한 빨간색
        red700 :	'	#fa342c',	//		매우 진한 빨간색
        red800 :	'	#ca1d13',	//		어두운 빨간색
        red900 :	'	#921708',	//		매우 어두운 빨간색
        red1000 :	'	#4a1209',	//		가장 어두운 빨간색
        //시맨틱 컬러 (Semantic Colors)

        kakaoYellow :	'		#fee500',	//		카카오 메인 노란색
        kakaoYellowHover :	'		#ffea2e',	//		카카오 노란색 호버 상태
        kakaoYellowActive :	'		#d5c000',	//		카카오 노란색 활성 상태
        kakaoYellowPressed :	'		#d5c000',	//		카카오 노란색 눌림 상태
        kakaoBrown :	'		#654321',	//		카카오 갈색
        kakaoBrownPressed :	'		#432a12',	//		카카오 갈색 눌림 상태
        //배경 컬러
        back_default :	'		#ffffff',	//		기본 배경색
        back_disabled :	'		#f3f4f5',	//		비활성 배경색
        fill :	'		#f7f8f9',	//		채움 배경색
        //텍스트 컬러
        text_default :	'		#2a3038',	//		기본 텍스트 색상
        text_sub :	'		#b0b3ba',	//		보조 텍스트 색상
        text_disabled :	'		#dcdee3',	//		비활성 텍스트 색상
        placeholder :	'		#b0b3ba',	//		플레이스홀더 텍스트 색상
        //테두리 컬러
        border_default :	'		#dcdee3',	//		기본 테두리 색상
        border_disabled :	'		#eeeff1',	//		비활성 테두리 색상
        //상태 컬러
        critical :	'		#fa342c',	//		경고/에러 색상
        criticalBackground :	'		#fdf0f0',	//		경고/에러 배경 색상
        info :	'		#217cf9',	//		정보 색상
        infoBackground :	'		#eff6ff',	//		정보 배경 색상
  },

    title1Bold: {
        fontSize: '1.25rem',       // 20px
        fontWeight: 700,
        lineHeight: '1.6875rem',   // 27px
    },

    title1Regular: {
        fontSize: '1.25rem',
        fontWeight: 400,
        lineHeight: '1.6875rem',
    },
    title2Bold: {
        fontSize: '1rem',          // 16px
        fontWeight: 700,
        lineHeight: '1.5rem',      // 24px
    },
    title2Regular: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
    },
    subtitle1Bold: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1.375rem',    // 22px
    },
    subtitle1Regular: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
    },
    subtitle2Bold: {
        fontSize: '0.875rem',      // 14px
        fontWeight: 700,
        lineHeight: '1.1875rem',   // 19px
    },
    subtitle2Regular: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.1875rem',
    },
    body1Bold: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1.375rem',
    },
    body1Regular: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.375rem',
    },
    body2Bold: {
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: '1.1875rem',
    },
    body2Regular: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.1875rem',
    },
    label1Bold: {
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: '1.1875rem',
    },
    label1Regular: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.1875rem',
    },
    label2Bold: {
        fontSize: '0.75rem',       // 12px
        fontWeight: 700,
        lineHeight: '1rem',        // 16px
    },
    label2Regular: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: '1rem',
    },
    spacing: {
        spacing0: '0px',
        spacing1: '4px',
        spacing2: '8px',
        spacing3: '12px',
        spacing4: '16px',
        spacing5: '20px',
        spacing6: '24px',
        spacing7: '28px',
        spacing8: '32px',
        spacing9: '36px',
        spacing10: '40px',
        spacing11: '44px',
        spacing12: '48px',
        spacing13: '52px',
        spacing14: '56px',
        spacing15: '60px',
        spacing16: '64px',
    },
}

export default theme
