import { useDispatch } from "react-redux"

export const Header = () => {
  const dispatch = useDispatch()
  const slider = () => {
    dispatch({
      type: "slider",
      data: true
    })
  }

  return (
    <div className="Header">
      <div className="Header-logo">
        <h1>Pluto</h1>
      </div>
      <div className="header-right">
        <button
          onClick={slider}>Register</button>
      </div>
    </div>
  )
}
