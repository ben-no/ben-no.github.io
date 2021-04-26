function [c,C] = EIv2(xa,CA,xb,CB)
% Ellipsoidal Intersection 
%
% This function implements the EI algorithm 
% and fuses two estimates (xA,CA) and (xB,CB). 

[TA,DA] = eig(CA);
BT = sqrt(DA)\inv(TA)*CB*TA/sqrt(DA);
[TBT,DBT] = eig(BT);
DBT = min(DBT,eye(length(CA)));

C = TA*sqrt(DA)*(TBT*DBT/TBT)*sqrt(DA)/TA;
% c = xa + (CA-C)/(CA+CB-2*C)*(xb-xa); % inversion of possibly singular matrix 
R = C + eps*eye(length(C)); % regularization
c = xa + (CA-R)/(CA+CB-2*R)*(xb-xa);
