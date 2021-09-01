let cajero = {
    saldo: 990,
    retirar:function(){
      let monto = parseInt(document.getElementById('retiro_id').value);
      if (monto <= this.saldo){
       this.saldo -= monto;
       if (this.saldo < 10){
           alert ('Tu cuenta no puede tener menos de $10')
       }

        this.paintSaldo();
        document.getElementById('retiro_id').value = '';
      }else alert('No tienes fondos suficientes');
      
    },
    // ingresar:function(){
    //   this.saldo += parseInt(document.getElementById('saldo_id').value);
    //   this.paintSaldo();
    //   alert('Saldo agregado correctamente');
    //   document.getElementById('ingresar_id').value = '';
    // },
    paintSaldo:function(){
      let b = this.saldo.toFixed(2);
      document.getElementById('saldo_id').innerHTML = '$'+ b;
    },
  }
  
  cajero.paintSaldo();
  