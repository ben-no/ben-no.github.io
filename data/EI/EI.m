function [c,C,Gamma] = EI(xA,CA,xB,CB)
% This function implements the EI algorithm and fuses two estimates
% (a,A) and (b,B) together to provide a new estimate (c,C). A common
% estimate (gamma, Gamma) is computed and subtracted from the fusion
% result.
Ai = inv(CA);
Bi = inv(CB);

[TA,DA] = eig(CA);
BT = sqrt(DA)\inv(TA)*CB*TA/sqrt(DA);
[SBT,DBT] = eig(BT);
DBT = max(DBT,eye(length(CA)));
Gamma = TA*sqrt(DA)*(SBT*DBT/SBT)*sqrt(DA)/TA;

% New covariance
C = inv(Ai+Bi-inv(Gamma));
% New mean
R = eps*eye(length(C)); % regularization
gamma = inv(Ai+Bi-2*inv(Gamma)+2*R)*((Bi-inv(Gamma)+R)*xA + (Ai-inv(Gamma)+R)*xB);
c = C*(CA\xA+CB\xB-Gamma\gamma);