import style from "./left.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Info from "./Info";
export default function Left(props) {
  return (
    <>
      <div className={style.mbody}>
        <Info
          ur="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEvUlEQVRYhe2WS2xUZRTHf+feaW9BAvJYCBRcCEF0oSESiTGG5wpSSmLpA6QtNaBGY2hCpy01mWihMxQpIW5Y9EVa0loMrYTEUJoQY4zgK25U1E1tC+lCFGJoZzr3Oy7mTp25nQJFEzaczdw5r///nO/L+Q48kocsMhPnuoLmVXHbyhfYAiwFlnmmIUSGgX6M9DZ0l/7yvxI4VNT8gsGKABvvM++AWhIMnyn79j8R2LfvVNbC29lNwFue703gHMintuteG8/JGgbIGZ/InbDkaRHJE8gHFgCK8pEzOlgZuhyKz5hAdUnnfNHoJ6hsAO6AHHfsQGOoc/ftu5EO7eqYGzOxKlWpBGYBA04Or4bayv+6bwJe5Z+RaPmIhck/3FXxzd2A/RIsbH7OEqsPeFKEz7Pjj20J9eyM+f0CmYK9tm8EhlzMuoauiuup9prClm2IHABeBFHQq4IcP9JVdiHpE+mu+KGqqPklG/uKqr4Stf9uBN71Y03pgHfhrgJjivVyuKv0+1R7bXFLvaocyly31Dd0lb2X5l/YskZFvgAcUV17pHvvd6l2y5/Cu+0CctwPXlPYss0Dj4IelEBgiQQCS0Sp8nR1tUVtW1NjPMAmwFLLivjx0o6grqB5lZto/U3HDjROKdCiEgXQuoauvcdSLI01xW2CakTRSuBCaphxY0ctO/tNVDfXlbSurD9T/mvGDriWtcP7PJfxtqu1FiDuSoffFI/raQCEtX5bpGf/LUR6E2TIT68p7Z9sAjCq56eAJxi4AFlOYMrdEdskcikmY6TKeQAVtkxPQHV5Qmn/lBFf5GsAJuK7/SYL6zXv80qm0IAb/9EjsDxNnw7AYhTcsfiNjFUYGkXYrMIHNcVt4qrbkQQXeD/ho1PvDhCLct2eDQJL0onPQMLdZRdBjgEOqhEba8TGGhEIA9kqNIY/3ntpJjl9R8ANAHtWYHEm5+qi9h0CZdMmUymvLmrfkcmW7SQqV0gbaukERH4HMLir/Qlqi9q2CuasootQehFdP5Flz5nIsucobBDoU3SRYM76ZwFA3A48AyDKYKreP4r7gc0ikgf0JZU1e9oXasx0ApYoVUe6y/3nfBm4XF3UGhQIK9pZs6f9qYbTpX/862LyEr/aP20H7LjbByCQH9rVMTep16i+AcxD6c0APinhrvKIKueBecTM/qQ+WHBqnsB2ANuSvtSYNAL1PRXXgAFgQczEqpJ6EU2wt/TEdOCTCdVq8j63TxZmO0FgPnAxdQpOIQCglgQBVZXK2sKWNZ56BYATH7vnhhMfjyef7RWQeNwUPQAYsQj6/TPuAzWFrScR3gEZtlxZd7indORewJnkUEH7UmPrV6C5KCcaussP+H0yzgFndLASGADNNba5Ul3YOmW+30tqS1qfN7b5EjQXkUvO6ODBTH7TrmShstbHo+OcBTYBY0CTcWNHIz37b90NOFhwap5tO0Gv7TlAv5PDzhmtZJMk1ocC0SeWfwjyNolu/anQJ0If8LMTvzMMEA3MzlW1VoPJ8277fMCgnHRGBw8+0FKaVlVx27OWEgbddj/+iFwSY4L+7eeBCSSlrqR1pXHJ957UZSC5iSRmSJEh0H51TW+45/XfZpL3kTxU+Qd9adHp389LWgAAAABJRU5ErkJggg=="
          mh="Heroku account"
          mb="Create apps, connect databases and add-on services, and collaborate on your apps."
        ></Info>
        <hr className={style.lb}></hr>
        <Info
          ur="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACVklEQVRoge2aP2gTURzHv7+zetEK/hmcBF3UiohCR4cuHXXThKZVa5S2W9MlXmiHUzCNlkoKDqZKUis2ttnERXBxcXJUKgREF0GQiAhiLt77OXRpwyVe7k8e0fcZ7/1+7/f9TMe9d4BCLhTWxmNj+e37v+tRAKjuqa0tLo7Xw5gTioARLQySRjkAJwCAgQoY09nVK+WgZwUqkI49OgrieYDPOk+jlyR+T2VWr70NamYgAuZoca/1CwYDSQD6X8rrBC7WqD49Xxr/6ne2LwHTNDVr/fAIE88BONBme5UYNyui9165HLW9ZvAskB4qDIBpAcApr3tsBOB1CExl1hIvvPW3SWr4wcFtdk8GwIiX/hZRnrMmJrMriQ9tdbktNM/ld1m9O1IMXAcQaTufOyyA79s/eebOs6s/3DS4EGAyYkvniTAH4JDPgG75zKAbkb6PD03TFK0KWwoY8aV+ErwA4Eyg8VxDbzSIyVtPE6+bVjg9NOJP9oFrOWK62KymgzATPwbpyezK8LfGxR6nDo2tPDNdCD+bK4iYLoFrEQCxxkXNqYMZx0KP1TbU5/TUUaCbUAKyUQKyUQKyUQKyUQKyUQKyUQKyUQKyUQKyaSLA7zsbww3OmZw/6jV9gomXAXComdzBTLzMmj7htPhvHmxtpYuPFjez6XA3BWCn74jOhHG4u5WuPV5vJD1UGICgHAinve6xEcDfBYfn98BsKfFKP/6pn5guA/jiYYsqMZIVe/dJr+GB//2Sr5GZePGILehuq2tWASRvl0bfBTVTXXQ3o1O/Gihk8weEcPGaMxyZ1QAAAABJRU5ErkJggg=="
          mh="Your app platform"
          mb="A platform for apps, with app management & instant scaling, for development and production."
        ></Info>
        <hr className={style.lb}></hr>
        <Info
          ur="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADX0lEQVRYhe2WTW8TVxSGn3NnnNJWYVUhIROpBRZdsGp+QnYFxURg4RAltd12E/VDagIkWK1SKXGCm6qt1FJVoibho3FklWCqLPkH/dggdRVQRQoVO4jEhz1zTxdjSyW2Z3Bg17yr0dxz3/eZq6M5F7b1f5d0UpxLFXt8JSEiB4HXgZ760m1FbxnMqufUKoXL76+/UIBccjGujv+ZYrKgbkS5FeFnEf/EzE/v/fXcAJOphX5EL6F0A1VgRZSrxto/Hu+IrQPseFzb47nylqgkgAGgC2HDwNDMUuaXLQOcHjz/oSpfA0aEsvGcU9PlkVtheyaOF/caXwoqHAGsqn48t5z9tmOAydRCP+gKoIKeyJeyX4UFN8MvjKnqGUCMcLjdSbQEyCUX49a1f6J0C/pJp+GbIOaBB+K6b+YvDd/dXGNabbSO/RylW4RyWPj48IVd48MXdrVbzy+lvwSuADvxalOtapoAcqliD5AGqsZzToWFx2r2eqxmr4dBOCongapisrnkYjwSwFcSgAOstGu4RjjoAdADYRDTy+k1ESqgru/aRCQAwtsAKlqJDm8oHMJaCbw08A4FEGQfgFjnt/BwufGfXTfCIFzr/xp4sy8SAGE3gP/Ia+pY1/OPNsJrMdPXeB88BxBBzdOqPuFO3Tu6B8I0t5Q5i+poLWb65i+O3Gu8n784cq8WM32ojs4tZc524tn8X1fuAt3Oy+5uYGPz8uxy9vtWRnWglmvOqyaOgqg2DammE1B0DUCN3xtF/6xSK70AFrkZCWAwqwD1wfJCZIwmAk9djQTwnFoFxAMGJo4X9z5v+ETy3H5VEiCesc61SIDgMqHngS7jSyHMfLaUkdlSJnSiGscUgC5Uf5wpv/N3JACAj51C2FDhyOnBhbGwgDBNporjigwA9z3Ls80CgELp3TsGhgjm+ZmtQEymiuMgc4AVZOiLcuafVnWhxzdxrPiBiHxTB73iqJycXk6vhe5JnttvHFOof7kV5KN8Kf1du/roK9mx4iFELgM7gaoIFZSrKvz+kvdwHeCJ+8oetdIrwmHQBBAD7gsylC+lmzq/IwCAscEfXuvS2KdgRqMvpeIJtogbm2p1AdkSQEO55GLcGr8f5JCIvqGYnsDE3rbITVFdNda51qrbt7WtdvoX7Gxxn9wv/sMAAAAASUVORK5CYII="
          mh="Deploy now"
          mb="Go from code to running app in minutes. Deploy, scale, and deliver your app to the world."
        ></Info>
      </div>
    </>
  );
}
