import React, { createContext, useContext, useState } from 'react'
const ThemeContent = createContext();
const { Provider } = ThemeContent;

function Layout({ children }) {
    return (
        <div style={{ display: 'inline' }}>
            {children}
        </div>
    )
}

function TimeAmount() {
    const { count } = useContext(ThemeContent)
    return (
        <div style={{
            backgroundColor: 'gray',
            width: 100,
            height: 100,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        }}>
            {`${count / 60 <= 9 ? 0 : ""}${Math.floor(count / 60)}: ${count % 60 <= 9 ? 0 : ""}${count % 60}`}
        </div>
    )
}
function EffectArea() {
    const [show, setShow] = useState(false);
    const [count, set] = useState(0)
    const [foo, setFoo] = useState();
    const [store, setStore] = useState([]);
    const [toatl, setTotal] = useState([]);
    const onStore = () => {
        let reduce;
        setStore(pre => {
            reduce = [...pre, count].reduce((accumulator, current) => accumulator + current, 0)
            return (
                [...pre, count]
            )
        });
        setTotal((tpre) => {
            return [...tpre, reduce]
        })
    }
    const onClear = () => {
        setStore([])
        set(0)
        setTotal([])
    }
    return (
        <Provider value={{ count }}>
            {show && <TimeAmount />}
            <div style={{ backgroundColor: 'black', width: 600, height: 600 }}>
                <button onClick={() => setShow(pre => !pre)}>show</button>
                {
                    show && <>
                        <button onClick={() => setFoo(setInterval(() => set(pre => pre + 1), 1000))}>Start</button>
                        <button onClick={onStore} >Store</button>
                        <button onClick={() => clearInterval(foo)}>Stop</button>
                        <button onClick={() => { clearInterval(foo); set(0) }}>Over</button>
                        <button onClick={onClear}>Clear</button>
                        <div style={{ display: 'flex' }}>
                            <div style={{ margin: 20 }}>
                                [秒數]
                                {store.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            {`${data / 60 <= 9 ? 0 : ""}${Math.floor(data / 60)}: ${data % 60 <= 9 ? 0 : ""}${data % 60}`}
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{ margin: 20 }}>
                                [累積秒數]
                                {toatl.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            {`${data / 60 <= 9 ? 0 : ""}${Math.floor(data / 60)}: ${data % 60 <= 9 ? 0 : ""}${data % 60}`}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                }
            </div>
        </Provider >
    )
}
export default function Timout() {

    return (
        <Layout >
            <EffectArea />
        </Layout>
    )
}
