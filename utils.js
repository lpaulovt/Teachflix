module.exports = {
    age: function(timestamp){
        const today = new Date();
        const birth  = new Date(timestamp)

        let age = today.getFullYear() - birth.getFullYear()

        const month = today.getMonth() - birth.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birth.getDate()){
            age-=1
        }

        return age
    },
    graduation: function(grau) {
        switch(grau) {
            case('1'):  return 'medio'
            case('2'): return 'superior'
            case('3'): return 'mestrado'
            case('4'): return 'doutorado'
        }
    }

}