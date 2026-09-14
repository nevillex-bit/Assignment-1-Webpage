const BirthDate=new Date("2008-10-14");
const CurrentTime=Date.now();
const Difference=CurrentTime-BirthDate;
const AgeInDays=Math.floor(Difference/(1000*60*60*24));
const Age=AgeInDays/365
