function [c,C] = EIv3(xA,CA,xB,CB)
% Ellipsoidal Intersection 
%
% This function implements the EI algorithm 
% and fuses two estimates (xA,CA) and (xB,CB). 

[TA,DA] = eig(CA);
BT = sqrt(DA)\inv(TA)*CB*TA/sqrt(DA);
[TB,DB] = eig(BT);
DBT = min(DB,eye(length(CA)));
T = inv(TA*sqrt(DA)*(TB));

C = T\DBT/T';
DA = eye(length(CA));

KA = diag((DA<DB) + 0.5*(DA==DB));
KB = diag((DA>DB) + 0.5*(DA==DB));

c = T\(KA.*(T*xA) + KB.*(T*xB));




