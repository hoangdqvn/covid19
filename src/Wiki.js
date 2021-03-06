import React, { Component } from 'react'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

class Wiki extends Component{
  render() {
    return(
      <div id="wiki">
        
        <h1 style={{fontSize: 45, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder', marginBottom: 25}}>
            <svg style={{width: 50}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="#445175" d="M128 128a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm64 144a5.33 5.33 0 0 1-5.33 5.33h-37.34v37.34A5.33 5.33 0 0 1 144 320h-32a5.33 5.33 0 0 1-5.33-5.33v-37.34H69.33A5.33 5.33 0 0 1 64 272v-32a5.33 5.33 0 0 1 5.33-5.33h37.34v-37.34A5.33 5.33 0 0 1 112 192h32a5.33 5.33 0 0 1 5.33 5.33v37.34h37.34A5.33 5.33 0 0 1 192 240zM64 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H64zM192 32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v64h128zm447.11 411.25L525.51 19.06C522.2 6.7 509.61-3.18 494.15 1L478.7 5.1q-9.27 2.49-16.06 14.24c-14 6.94-52.3 17.21-68 18.22q-11.76-6.8-21-4.3l-15.49 4.14c-2.42.65-4.2 2-6.15 3.08V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v64h128l101.66 396.94C457 505.3 469.56 515.18 485 511l15.45-4.14q9.27-2.49 16.06-14.24c13.91-6.88 52.18-17.2 68-18.22q11.76 6.8 21 4.3l15.49-4.1c15.47-4.14 21.43-18.99 18.11-31.35zm-134.4-7.06L412.64 92.37l61.82-16.56 92.07 343.82zM224 128.81c38.62 29.24 64 75.12 64 127.19s-25.38 98-64 127.19v.81h128V128H224zM224 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H224z"></path>
            </svg> コロナウイルスに関する情報
        </h1>
        
        <div className="row">
            <div className="col-lg-11 col-sm-12 container--wrap center">
                <h2 style={{fontSize: 35, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder'}}>
                    <svg style={{width: 25, paddingBottom: 6}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" className="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z">
                        </path>
                    </svg> コロナウイルスとは何ですか？</h2>
                <ol style={{fontSize: 20}}>
                    <li>
                    2019ノヴェルコロナウイルス（2019-nCoV）は
                    中国の武漢で最初に検出された呼吸器疾患の発生の原因として特定されたウイルス（より具体的には、コロナウイルス）です。
                    </li>
                    <li>
                    武漢での集団発生の患者の多くは、早い段階で、大規模な魚介類や動物の市場と何らかのつながりがあり、動物から人への感染が示唆されたと伝えられています。
                    </li>
                    <li>
                    しかしながら、伝えられるところによると、動物市場への接触がなかった患者の数の増加は、人から人への感染拡大が起こっていることを示しています。
                    </li>
                    <li>
                    コロナウイルスという名前はラテン語のコロナに由来し、「クラウン」または「ハロー」を意味します。これは、クラウンを連想させる特徴的な外観を指します。
                    </li>
                </ol>
                <h2 style={{fontSize: 35, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder'}}>
                コロナウイルスはどのように見えますか？</h2>
                <p style={{textAlign: 'center'}}>これらの画像は色分けされており、電子顕微鏡からのものです</p>
                <div style={{textAlign: 'center'}}>
                    <img src="https://cnet1.cbsistatic.com/img/uczm50w1XdnHgoE962ade2rOB5w=/940x0/2020/01/21/144e65f7-60cd-4dc7-ab7c-d93fb75ad624/gettyimages-1134490146.jpg" alt="Coronavirus under a microscope" width="500px;"/>
                    <img src="https://media.npr.org/assets/img/2012/09/26/gettyimages_151032915_wide-28f4f9f0bffdab37a4b891d28a17b12ae7370f3f-s800-c85.jpg" alt="Coronavirus under a microscope" width="500px;"/>
                </div>
                <br/>
                <h2 style={{fontSize: 35, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder'}}>
                どのように感染するのですか？</h2>
                <ol style={{fontSize: 20}}>
                    <li>
                    感染の主な経路は、呼吸飛沫と密接な接触です。
                    </li>
                    <li>
                    くしゃみや咳をすると、鼻や口から液体の滴が出ます。
                    </li>
                    <li>
                    それらの飛沫は感染症を運ぶ可能性があり、他の人の目に入ったとき、目、鼻、口に入ると、感染症が病気になります。 これはインフルエンザと多くのウイルスが蔓延する方法です。
                    </li>
                    <li>
                    ほとんどの場合、このように広がるには、人の近く（1.8メートル以内）にいる必要があります。
                    </li>
                    <li>
                    比較的閉鎖された環境で高濃度のエアロゾルに長時間曝されると、エアロゾルが伝播する可能性があります。
                    </li>
                    <li>
                    WHO (世界保健機関) は、症状のない人からの感染のリスクは「非常に低く」、糞便感染は「低い」と述べています。
                    </li>
                </ol>

                <h2 style={{fontSize: 35, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder'}}>
                正しい情報</h2>
                <ol style={{fontSize: 20}}>
                    <li>
                    2019-nCoVウイルスは、高温多湿な気候の地域で感染する可能性があります。
                    </li>
                    <li>
                    寒い気候と雪が新しいコロナウイルスを殺すことはできません。
                    </li>
                    <li>
                    熱い風呂に入っても、新しいコロナウイルス病は防げません。
                    </li>
                    <li>
                    新しいコロナウイルスは蚊に刺されては伝染しません。
                    </li>
                    <li>
                    新しいコロナウイルスを殺すのにハンドドライヤーは効果的ですか？<br/>
                    <i>いいえ。ハンドドライヤーは2019-nCoVの殺害には効果的ではありません。</i>
                    </li>
                    <li>
                    紫外線消毒ランプは新しいコロナウイルスを殺すことができますか？<br/>>
                    <i>UVランプは皮膚の炎症を引き起こす可能性があるため、手や皮膚の他の領域の殺菌にはUVランプを使用しないでください</i>。
                    </li>
                    <li>
                    アルコールや塩素を全身に噴霧すると、新しいコロナウイルスを殺すことができますか？<br/>
                    <i>いいえ。アルコールや塩素を全身にスプレーしても、すでに体内に入ったウイルスを殺すことはできません。</i>
                    </li>
                    <li>
                    肺炎に対するワクチンは新しいコロナウイルスからあなたを守りますか？<br/>
                    <i>いいえ。肺炎球菌ワクチンやヘモフィルスインフルエンザB型（Hib）ワクチンなどの肺炎に対するワクチンは、新しいコロナウイルスに対する防御にはなりません。</i>
                    </li>
                    <li>
                    生理食塩水で定期的に鼻をすすぐと、新しいコロナウイルスによる感染を防ぐことができますか？<br/>
                    <i>いいえ。生理食塩水で定期的に鼻をすすぐことで人々が新しいコロナウイルスに感染するのを防いだという証拠はありません。</i>
                    </li>
                    <li>
                    ニンニクを食べると新しいコロナウイルスの感染を防ぐことができますか？<br/>
                    <i>ニンニクは、いくつかの抗菌特性を持つかもしれない健康食品です。 しかし、ニンニクを食べることが新しいコロナウイルスから人々を保護したという現在の発生からの証拠はありません。</i>
                    </li>
                    <li>
                    抗生物質は新しいコロナウイルスの予防と治療に効果的ですか？<br/>
                    <i>いいえ、抗生物質はウイルスに対しては作用せず、細菌に対してのみ作用します。</i>
                    </li>
                </ol>

                <h2 style={{fontSize: 35, textAlign: 'center', paddingTop: 15, fontWeight: 'bolder'}}>
                どうすれば身を守ることができますか？</h2>
                <h2 style={{fontSize: 35, textAlign: 'left', paddingTop: 15, fontWeight: 'bolder'}}>
                手洗い</h2>
                <ol style={{fontSize: 20}}>
                    <li>
                    いくつかの政府は、集団感染の影響を受けた国や地域へのすべての重要でない旅行に対して助言します。
                    </li>
                    <li>
                    感染を防ぐ方法については、誤解が広がっています。鼻をすすぐ、うがい薬でうがい、ニンニクを食べることは効果的ではありません。
                    </li>
                    <li>
                    CDCは、特にトイレに行った後や手が明らかに汚れている場合は、少なくとも20秒間は石鹸と水で頻繁に手を洗うことを推奨しています。
                    <ul>
                      <li>
                      さらに、石鹸と水がすぐに手に入らない場合は、少なくとも60％のアルコールを含むアルコールベースの手指消毒剤（または120証拠）を使用することをお勧めします。
                      </li>
                      <li>
                      WHOは洗っていない手で目、鼻、口に触れないようにアドバイスしています。
                      </li>
                    </ul>
                    </li>
                </ol>
                <h2 style={{fontSize: 35, textAlign: 'left', paddingTop: 15, fontWeight: 'bolder'}}>
                呼吸器衛生</h2>
                <ol style={{fontSize: '20px'}}>
                  <li>
                  医療機関は、咳やくしゃみをするときは口や鼻をティッシュで覆うか（すぐに処分する必要があります）、ティッシュが手元にない場合は袖で覆うことを推奨しています。
                  </li>
                  <li>
                  感染した可能性のある人によるサージカルマスクの使用も推奨されています。これは、話したり、くしゃみをしたり、咳をしたりするときに分散する呼気の飛沫の量と移動距離を制限する可能性があるためです。
                  </li>
                  <li>
                  低リスクの非感染者によるサージカルマスクの着用が効果的であることを示す証拠はありません。  
                  </li>
                  <li>
                  健康な国民によるマスクの使用を特に推奨しているのは中国だけで、香港、日本、マレーシア、シンガポールの健康な人々はフェイスマスクを広く使用しています。  
                  </li>
        </ol>
        <h2 style={{fontSize: '35px', textAlign: 'left', paddingTop: '15px', fontWeight: 'bolder'}}>
        マスクの使い方</h2>
        <ol style={{fontSize: '20px'}}>
          <li>
          <em>咳やくし</em>ゃ<em>みをする</em>場合はマスクを着用してください。
          </li>
          <li>
          マスクを着用する場合は、マスクの使用方法と適切な廃棄方法を知っている必要があります。
          </li>
          <li>
          マスクを装着する前に、アルコールベースの手指消毒剤または石鹸と水で手をきれいにしてください。  
          </li>
          <li>
          マスクで口と鼻を覆い、顔とマスクの間に隙間がないことを確認します。  
          </li>
          <li>
          使用中はマスクに触れないでください。  
          </li>
          <li>
          マスクが湿ったらすぐに新しいマスクと交換し、使い捨てマスクは再使用しないでください。  
          </li>
          <li>
          マスクを取り外すには、マスクを後ろから外し（マスクの前面に触れないでください）、すぐに閉じた箱に捨て、アルコールベースの手でこするか石鹸と水で手を拭きます。  
          </li>
        </ol>
        <h2 style={{fontSize: '35px', textAlign: 'left', paddingTop: '15px', fontWeight: 'bolder'}}>
        感染しているかどうかはどうすればわかりますか？</h2>
        <p>感染の一般的な兆候には、呼吸器症状、発熱、咳、息切れ、呼吸困難などがあります。 より重症の場合、感染症は肺炎、重症急性呼吸器症候群、腎不全、さらには死に至ることもあります。</p>
        <table>
          <tbody><tr>
              <th>症状</th>
              <th>%</th>
            </tr>
            <tr>
              <td>熱</td>
              <td>87.9%</td>
            </tr>
            <tr>
              <td>乾いた咳</td>
              <td>67.7%</td>
            </tr>
            <tr>
              <td>倦怠感</td>
              <td>38.1%</td>
            </tr>
            <tr>
              <td>痰の生産</td>
              <td>33.4%</td>
            </tr>
            <tr>
              <td>息切れ</td>
              <td>18.6%</td>
            </tr>
            <tr>
              <td>筋肉痛または関節痛</td>
              <td>14.8%</td>
            </tr>
            <tr>
              <td>喉の痛み</td>
              <td>13.9%</td>
            </tr>
            <tr>
              <td>頭痛</td>
              <td>13.6%</td>
            </tr>
            <tr>
              <td>寒気</td>
              <td>11.4%</td>
            </tr>
            <tr>
              <td>吐き気または嘔吐</td>
              <td>5.0%</td>
            </tr>
            <tr>
              <td>鼻詰まり</td>
              <td>4.8%</td>
            </tr>
            <tr>
              <td>下痢</td>
              <td>3.7%</td>
            </tr>
            <tr>
              <td>喀血</td>
              <td>0.9%</td>
            </tr>
            <tr>
              <td>結膜の混雑</td>
              <td>0.8%</td>
            </tr>
          </tbody></table>
        <h2 style={{fontSize: '35px', textAlign: 'left', paddingTop: '15px', fontWeight: 'bolder'}}>
        感染していると思います。どうしよう？</h2>
        <ol style={{fontSize: '20px'}}>
          <li>
          2019-nCoVと診断された人や感染したと疑われる人には、自宅での自己隔離が推奨されています。
          </li>
          <li>
          公衆衛生機関は、電話による医療提供者への通知や、医療を受けることを除いて、家の外でのすべての活動を制限することを含む自己隔離指示を発行しています。
          </li>
          <li>
          職場、学校、公共の場所に行ってはいけません。 公共交通機関、配車、タクシーの使用は避けてください  
          </li>
          <li>
          最近広範囲に伝染する国に旅行した人、または2019-nCoVと診断された人と直接接触した人は、一部の政府保健機関から最後の時から14日間、自己検疫または社会的距離をとるように依頼されました 可能性のある暴露。  
          </li>
          <li>
          症状を緩和するための試みには、定期的な（店頭で）風邪薬を飲むこと、水分を飲むこと、および休息が含まれる場合があります。 重症度によっては、酸素療法、静脈内輸液、呼吸補助が必要になる場合があります。  
          </li>
          <li>
          ステロイドの使用は転帰を悪化させる可能性があります。  
          </li>
        </ol>
        <h2 style={{fontSize: '35px', textAlign: 'left', paddingTop: '15px', fontWeight: 'bolder'}}>
        ワクチンや治療法はありますか？</h2>
        <ol style={{fontSize: '20px'}}>
          <li>
          現在利用できるワクチンはありません。
          </li>
          <li>
          世界中のいくつかの組織が、いくつかの異なる方法を使用してワクチンを開発しています。
          </li>
          <li>
          2020年3月上旬までに、30のワクチン候補が開発中で、ギリアドサイエンスおよびアスクレチスファーマによる製品が第III相臨床試験にあります。  
          </li>
          <li>
          ファビピラビル、リバビリン、レムデシビル、ガリデシビルなど、他のウイルス性疾患の治療に以前承認されたいくつかの化合物が、コロナウイルスに対して調査されています。  
          </li>
          <li>
          ロピナビル/リトナビルとレムデシビルの臨床試験が進行中です。  
          </li>
          <li>
          WHOの事務局次長ブルース エールワード(Bruce Aylward)は次のように述べています。  
          </li>
        </ol>
      </div>
      
      </div>
      </div>
    )
  }
}
export default Wiki;