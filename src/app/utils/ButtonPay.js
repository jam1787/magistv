'use client'

const ButtonPay = ({classStyle, price}) => {
  return (
    <button
      className={classStyle}
      onClick={() => console.log('Pagando')}
    >
      CONTRATAR
    </button>
  )
}

export default ButtonPay