'use client'

const ButtonPay = ({classStyle, plan}) => {
  const handlePay = async() => {
    const res = await fetch('api/checkout', {
      method: "POST",
      body: JSON.stringify(plan),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const session = await res.json()
    window.location = session.url
  }

  return (
    <button
      className={classStyle}
      onClick={() => handlePay()}
    >
      CONTRATAR
    </button>
  )
}

export default ButtonPay