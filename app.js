const €=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR'}).format(n);
function setResult(id,text){document.getElementById(id).innerHTML=text}
function pct(){let n=+v('n'),p=+v('p');setResult('r',`${p}% de ${n} = <b>${n*p/100}</b>`)}
function iva(){let n=+v('n'),p=+v('p');let iva=n*p/100;setResult('r',`Base: <b>${€(n)}</b><br>IVA: <b>${€(iva)}</b><br>Total: <b>${€(n+iva)}</b>`)}
function imc(){let w=+v('w'),h=+v('h')/100,x=w/(h*h);let c=x<18.5?'Bajo peso':x<25?'Peso normal':x<30?'Sobrepeso':'Obesidad';setResult('r',`IMC: <b>${x.toFixed(1)}</b> — ${c}`)}
function cal(){let w=+v('w'),h=+v('h'),a=+v('a'),s=v('s'),act=+v('act');let b=s==='h'?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;setResult('r',`Estimación de mantenimiento: <b>${Math.round(b*act)} kcal/día</b><br><small>Es una estimación, no una indicación médica.</small>`)}
function age(){let d=new Date(v('d')),now=new Date(),a=now.getFullYear()-d.getFullYear();if(new Date(now.getFullYear(),d.getMonth(),d.getDate())>now)a--;setResult('r',`Edad aproximada: <b>${a} años</b>`)}
function dates(){let a=new Date(v('a')),b=new Date(v('b'));let days=Math.round(Math.abs(b-a)/86400000);setResult('r',`Diferencia: <b>${days} días</b>`)}
function loan(){let P=+v('p'),annual=+v('i')/100/12,n=+v('y')*12,m=annual?P*annual/(1-(1+annual)**-n):P/n;setResult('r',`Cuota mensual: <b>${€(m)}</b><br>Total pagado: <b>${€(m*n)}</b><br>Intereses: <b>${€(m*n-P)}</b>`)}
function compound(){let P=+v('p'),monthly=+v('a')/100/12,n=+v('y')*12,add=+v('m'),x=P;for(let i=0;i<n;i++)x=x*(1+monthly)+add;setResult('r',`Capital final estimado: <b>${€(x)}</b><br>Aportado: <b>${€(P+add*n)}</b>`)}
function mortgage(){loan()}
function net(){let gross=+v('g'),rate=+v('rr')/100;setResult('res',`Estimación simple: <b>${€(gross*(1-rate))}</b> al año<br><small>El sueldo neto real depende de IRPF, cotizaciones, situación personal y número de pagas.</small>`)}
function v(id){return document.getElementById(id).value}
