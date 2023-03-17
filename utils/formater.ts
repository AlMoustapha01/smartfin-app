export const formatMoney =(data:any) =>{

    if(data){
      return data.toString().replace(/ /g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return 0;
};
