import './dashboard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Dashboard() {
  const [formData, setFormData] = useState({
    r1:'',
    r2:'',
    r3:'',
    r4:'',
    r5:'',
    r6:'',
    r7:'',
    r8:'',
    r9:'',
    r10:'',
    r11:'',
    r12:'',
    r13:'',
    r14:'',
    r15:'',
    r16:'',
    r17:'',
    r18:'',
    r19:'',
    r20:'',
    r21:'',
  })
  const location = useLocation();
  const onChangeHandler = (event) => {
    
    //let a;
    //let b;
    console.log(event)
    
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
    const [tab, settab] = useState('0');
    const[dep, setdep] = useState('0');
    const[stre, setstre] = useState('0');
    const[anx, setanx] = useState('0');
    const[depr, setdepr] = useState('0');
    const[stres, setstres] = useState('0');
    const[anxi, setanxi] = useState('0');

    var d;
    var s;
    var a;
    var de;
    var an;
    var st;
  
  const onSubmitHandler = (event) => {
    settab('1');
    event.preventDefault()
    console.log(formData)
    var d1=Number(formData.r3)+Number(formData.r5)+Number(formData.r10)+Number(formData.r13)+Number(formData.r16)+Number(formData.r17)+Number(formData.r21);
    var s1=Number(formData.r1)+Number(formData.r6)+Number(formData.r8)+Number(formData.r11)+Number(formData.r12)+Number(formData.r14)+Number(formData.r18);
    var a1=Number(formData.r2)+Number(formData.r4)+Number(formData.r7)+Number(formData.r9)+Number(formData.r15)+Number(formData.r19)+Number(formData.r20);
     d=2*d1;
     s=2*s1;
     a=2*a1;
     if(d>=0 && d<=9){
      de="Normal";}else if(d>9 && d<=12){
        de="Mild";} else if(d>12 && d<=20){
        de="Moderate";}else if(d>20 && d<=27){
          de="Severe";}else{
            de="Extremely severe";
          }

          if(s>=0 && s<=9){
            st="Normal";}else if(s>9 && s<=12){
              st="Mild";} else if(s>12 && s<=20){
              st="Moderate";}else if(s>20 && s<=27){
                st="Severe";}else{
                  st="Extremely severe";
                }
                if(a>=0 && a<=9){
                  an="Normal";}else if(a>9 && a<=12){
                    an="Mild";} else if(a>12 && a<=20){
                    an="Moderate";}else if(a>20 && a<=27){
                      an="Severe";}else{
                        an="Extremely severe";
                      }
                  
      
     setdep(d);
    setstre(s);
    setanx(a);
    setdepr(de);
    setstres(st);
    setanxi(an);
     console.log(d);
    console.log(s);
    console.log(a);
  }
  return (
    <>
    <h1 style={{color:'#099fea',paddingLeft:'20px',paddingBottom:'0px'}}><strong>Hello {location.state.name}!! </strong>
    </h1>
    <div className="App2">
      <h1 style={{paddingLeft:'0px',color:'#099fea'}}>Welcome to the Questionnaire Portal</h1>
      <br></br>
      <br></br>
      <br></br>
      <h2><div classname="desc2" style={{color:"#099fea"}}>Please read each statement and choose a number 0, 1, 2 or 3 that indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.</div>
       </h2>
       <br></br>
       <br></br>
       <br></br>
           <form onSubmit={onSubmitHandler}>
         <div className="form-group2">
          <label htmlFor="r1" className="form-label2">1. I found myself getting upset by quite trivial things</label>
          <div>
            <div>
              <input type="radio" name="r1" value="0" onChange={onChangeHandler} checked={formData.r1 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r1" value="1" onChange={onChangeHandler} checked={formData.r1  === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r1" value="2" onChange={onChangeHandler} checked={formData.r1  === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r1" value="3" onChange={onChangeHandler} checked={formData.r1  === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r2" className="form-label2">2. I was aware of dryness of my mouth</label>
          <div>
            <div>
              <input type="radio" name="r2" value="0" onChange={onChangeHandler} checked={formData.r2 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r2" value="1" onChange={onChangeHandler} checked={formData.r2 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r2" value="2" onChange={onChangeHandler} checked={formData.r2 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r2" value="3" onChange={onChangeHandler} checked={formData.r2 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r3" className="form-label2">3. I couldn’t seem to experience any positive feeling at all</label>
          <div>
            <div>
              <input type="radio" name="r3" value="0" onChange={onChangeHandler} checked={formData.r3 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r3" value="1" onChange={onChangeHandler} checked={formData.r3 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r3" value="2" onChange={onChangeHandler} checked={formData.r3 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r3" value="3" onChange={onChangeHandler} checked={formData.r3 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r4" className="form-label2">4. I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)</label>
          <div>
            <div>
              <input type="radio" name="r4" value="0" onChange={onChangeHandler} checked={formData.r4 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r4" value="1" onChange={onChangeHandler} checked={formData.r4 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r4" value="2" onChange={onChangeHandler} checked={formData.r4 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r4" value="3" onChange={onChangeHandler} checked={formData.r4 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r5" className="form-label2">5. I just couldn't seem to get going</label>
          <div>
            <div>
              <input type="radio" name="r5" value="0" onChange={onChangeHandler} checked={formData.r5 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r5" value="1" onChange={onChangeHandler} checked={formData.r5 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r5" value="2" onChange={onChangeHandler} checked={formData.r5 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r5" value="3" onChange={onChangeHandler} checked={formData.r5 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r6" className="form-label2">6. I tended to over-react to situations</label>
          <div>
            <div>
              <input type="radio" name="r6" value="0" onChange={onChangeHandler} checked={formData.r6 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r6" value="1" onChange={onChangeHandler} checked={formData.r6 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r6" value="2" onChange={onChangeHandler} checked={formData.r6 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r6" value="3" onChange={onChangeHandler} checked={formData.r6 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r7" className="form-label2">7. I experienced trembling (e.g. in the hands)</label>
          <div>
            <div>
              <input type="radio" name="r7" value="0" onChange={onChangeHandler} checked={formData.r7 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r7" value="1" onChange={onChangeHandler} checked={formData.r7 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r7" value="2" onChange={onChangeHandler} checked={formData.r7 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r7" value="3" onChange={onChangeHandler} checked={formData.r7 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r8" className="form-label2">8. I felt that I was using a lot of nervous energy</label>
          <div>
            <div>
              <input type="radio" name="r8" value="0" onChange={onChangeHandler} checked={formData.r8 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r8" value="1" onChange={onChangeHandler} checked={formData.r8  === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r8" value="2" onChange={onChangeHandler} checked={formData.r8  === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r8" value="3" onChange={onChangeHandler} checked={formData.r8  === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r9" className="form-label2">9. I was worried about situations in which I might panic and make a fool
of myself</label>
          <div>
            <div>
              <input type="radio" name="r9" value="0" onChange={onChangeHandler} checked={formData.r9 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r9" value="1" onChange={onChangeHandler} checked={formData.r9 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r9" value="2" onChange={onChangeHandler} checked={formData.r9 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r9" value="3" onChange={onChangeHandler} checked={formData.r9 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r10" className="form-label2">10.  I felt that I had nothing to look forward to</label>
          <div>
            <div>
              <input type="radio" name="r10" value="0" onChange={onChangeHandler} checked={formData.r10 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r10" value="1" onChange={onChangeHandler} checked={formData.r10 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r10" value="2" onChange={onChangeHandler} checked={formData.r10 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r10" value="3" onChange={onChangeHandler} checked={formData.r10 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r11" className="form-label2">11. I found myself getting agitated</label>
          <div>
            <div>
              <input type="radio" name="r11" value="0" onChange={onChangeHandler} checked={formData.r11 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r11" value="1" onChange={onChangeHandler} checked={formData.r11 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r11" value="2" onChange={onChangeHandler} checked={formData.r11 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r11" value="3" onChange={onChangeHandler} checked={formData.r11 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r12" className="form-label2">12. I found it difficult to relax</label>
          <div>
            <div>
              <input type="radio" name="r12" value="0" onChange={onChangeHandler} checked={formData.r12 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r12" value="1" onChange={onChangeHandler} checked={formData.r12 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r12" value="2" onChange={onChangeHandler} checked={formData.r12 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r12" value="3" onChange={onChangeHandler} checked={formData.r12 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r13" className="form-label2">13. I felt down-hearted and blue</label>
          <div>
            <div>
              <input type="radio" name="r13" value="0" onChange={onChangeHandler} checked={formData.r13 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r13" value="1" onChange={onChangeHandler} checked={formData.r13 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r13" value="2" onChange={onChangeHandler} checked={formData.r13 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r13" value="3" onChange={onChangeHandler} checked={formData.r13 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r14" className="form-label2">14. I was intolerant of anything that kept me from getting on with what I
was doing </label>
          <div>
            <div>
              <input type="radio" name="r14" value="0" onChange={onChangeHandler} checked={formData.r14 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r14" value="1" onChange={onChangeHandler} checked={formData.r14 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r14" value="2" onChange={onChangeHandler} checked={formData.r14 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r14" value="3" onChange={onChangeHandler} checked={formData.r14 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r15" className="form-label2">15. I felt I was close to panic </label>
          <div>
            <div>
              <input type="radio" name="r15" value="0" onChange={onChangeHandler} checked={formData.r15 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r15" value="1" onChange={onChangeHandler} checked={formData.r15  === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r15" value="2" onChange={onChangeHandler} checked={formData.r15  === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r15" value="3" onChange={onChangeHandler} checked={formData.r15  === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r16" className="form-label2">16.  I was unable to become enthusiastic about anything</label>
          <div>
            <div>
              <input type="radio" name="r16" value="0" onChange={onChangeHandler} checked={formData.r16 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r16" value="1" onChange={onChangeHandler} checked={formData.r16 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r16" value="2" onChange={onChangeHandler} checked={formData.r16 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r16" value="3" onChange={onChangeHandler} checked={formData.r16 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r17" className="form-label2">17. I felt I wasn't worth much as a person</label>
          <div>
            <div>
              <input type="radio" name="r17" value="0" onChange={onChangeHandler} checked={formData.r17 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r17" value="1" onChange={onChangeHandler} checked={formData.r17 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r17" value="2" onChange={onChangeHandler} checked={formData.r17 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r17" value="3" onChange={onChangeHandler} checked={formData.r17 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r18" className="form-label2">18. I felt that I was rather touchy</label>
          <div>
            <div>
              <input type="radio" name="r18" value="0" onChange={onChangeHandler} checked={formData.r18 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r18" value="1" onChange={onChangeHandler} checked={formData.r18 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r18" value="2" onChange={onChangeHandler} checked={formData.r18 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r18" value="3" onChange={onChangeHandler} checked={formData.r18 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r19" className="form-label2">19. I was aware of the action of my heart in the absence of physical
exertion (e.g. sense of heart rate increase, heart missing a beat)</label>
          <div>
            <div>
              <input type="radio" name="r19" value="0" onChange={onChangeHandler} checked={formData.r19 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r19" value="1" onChange={onChangeHandler} checked={formData.r19 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r19" value="2" onChange={onChangeHandler} checked={formData.r19 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r19" value="3" onChange={onChangeHandler} checked={formData.r19 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r20" className="form-label2">20. I felt scared without any good reason</label>
          <div>
            <div>
              <input type="radio" name="r20" value="0" onChange={onChangeHandler} checked={formData.r20 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r20" value="1" onChange={onChangeHandler} checked={formData.r20 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r20" value="2" onChange={onChangeHandler} checked={formData.r20 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r20" value="3" onChange={onChangeHandler} checked={formData.r20 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="r21" className="form-label2">21. I felt that life was meaningless </label>
          <div>
            <div>
              <input type="radio" name="r21" value="0" onChange={onChangeHandler} checked={formData.r21 === '0'} />
              <label htmlFor="0">(0)Did not apply to me at all - NEVER</label>
            </div>
            <div>
              <input type="radio" name="r21" value="1" onChange={onChangeHandler} checked={formData.r21 === '1'} />
              <label htmlFor="1">(1) Applied to me to some degree, or some of the time - SOMETIMES</label>
            </div>
            <div>
              <input type="radio" name="r21" value="2" onChange={onChangeHandler} checked={formData.r21 === '2'} />
              <label htmlFor="2">(2) Applied to me to a considerable degree, or a good part of time - OFTEN</label>
            </div>
            <div>
              <input type="radio" name="r21" value="3" onChange={onChangeHandler} checked={formData.r21 === '3'} />
              <label htmlFor="3">(3)Applied to me very much, or most of the time - ALMOST ALWAYS</label>
            </div>
          </div>
        </div>
        
        <div className="form-group2">
          <button className="btn2" type="submit" >Predict</button>
        </div>
       </form>
       {tab==='1' &&
        (<div className='result2'><h1>User profile:</h1>
         <div> <strong>Name : {location.state.name}</strong></div>
         <br></br>
         <div><strong>Gender :{location.state.gender}</strong> </div>
         <br></br>
          <div><strong>Occupation :{location.state.occupation}</strong></div>
          <br></br>
          <div><strong>Depression Score : {dep}</strong></div>
          <br></br>
        <div><strong>Your depression level is :{depr}</strong></div>
        <br></br>
        <div><strong>Anxiety Score : {anx}</strong></div>
        <br></br>
        <div><strong>Your Anxiety level is :{anxi}</strong></div>
        <br></br>
        <div><strong>Stress Score : {stre}</strong></div>
        <br></br>
        <div><strong>Your Stress Level is {stres}</strong></div>
        </div>
        
        )
        }

    </div>
</>    );
}


export default Dashboard
