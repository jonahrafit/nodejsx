import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import OfferHistory from "../components/member/offer";
import { getValidationByUser } from "../store/actions/validation";
import { convertDateString } from "../utils/converDate";

function Blank() {
  function _0x3188() { const _0x2f6a28 = ['sort', 'user', 'renumeration', '112332cXyzMK', 'dateO', '10143117tCOCio', 'idt', 'auth', '30342120Xbeqpi', 'offerwall', '5036cMRCGg', 'dateH', '824173jFKqfi', 'hashId', 'etat', 'DOWN', '3085jwQAlz', '8wCnafR', '1878HkQDBQ', '4192002uvLghh', '556ZWYVSk']; _0x3188 = function () { return _0x2f6a28; }; return _0x3188(); } const _0xf6c2a2 = _0x11e0; (function (_0x553253, _0x5c84ed) { const _0x4737d4 = _0x11e0, _0x57ebf2 = _0x553253(); while (!![]) { try { const _0x5433a1 = -parseInt(_0x4737d4(0x9a)) / 0x1 + parseInt(_0x4737d4(0x96)) / 0x2 * (parseInt(_0x4737d4(0x94)) / 0x3) + -parseInt(_0x4737d4(0x8c)) / 0x4 * (parseInt(_0x4737d4(0x92)) / 0x5) + -parseInt(_0x4737d4(0x95)) / 0x6 + parseInt(_0x4737d4(0x8e)) / 0x7 * (parseInt(_0x4737d4(0x93)) / 0x8) + -parseInt(_0x4737d4(0x9c)) / 0x9 + parseInt(_0x4737d4(0x8a)) / 0xa; if (_0x5433a1 === _0x5c84ed) break; else _0x57ebf2['push'](_0x57ebf2['shift']()); } catch (_0x355148) { _0x57ebf2['push'](_0x57ebf2['shift']()); } } }(_0x3188, 0x9535c)); const dispatch = useDispatch(), auth = useSelector(_0x51fd72 => _0x51fd72[_0xf6c2a2(0x89)]), [title] = useState('Mes\x20Participations'), [orderOfData, setOrderOfData] = useState('UP'); useEffect(() => { const _0x5425c8 = _0xf6c2a2; if (auth['user']) dispatch(getValidationByUser(auth[_0x5425c8(0x98)][_0x5425c8(0x8f)])); }, [dispatch, auth]); function _0x11e0(_0x251919, _0x277ed4) { const _0x3188bf = _0x3188(); return _0x11e0 = function (_0x11e019, _0x3b9400) { _0x11e019 = _0x11e019 - 0x89; let _0x34d821 = _0x3188bf[_0x11e019]; return _0x34d821; }, _0x11e0(_0x251919, _0x277ed4); } const validations = useSelector(_0x19603e => _0x19603e['validation']), [data, setData] = useState([]); useEffect(() => { setData(validations['map'](_0x1aba27 => { const _0x1af596 = _0x11e0, _0x33f540 = { 'date': isNaN(_0x1aba27['idt']) ? convertDateString(_0x1aba27[_0x1af596(0x8d)]) : convertDateString(_0x1aba27[_0x1af596(0x9b)]), 'nom': isNaN(_0x1aba27[_0x1af596(0x9d)]) ? _0x1aba27['idt'] : _0x1aba27['nom'], 'renumeration': isNaN(_0x1aba27[_0x1af596(0x9d)]) ? parseFloat(_0x1aba27['renumerationH']) + '\x20' : parseFloat(_0x1aba27['renumerationO']) + '\x20', 'status': _0x1aba27[_0x1af596(0x90)], 'offerwall': _0x1aba27[_0x1af596(0x8b)] }; return _0x33f540; })); }, [validations]); function handlechangeOrder() { const _0x258e93 = _0xf6c2a2; orderOfData === 'UP' ? (setOrderOfData(_0x258e93(0x91)), setData([...data]['sort']((_0xdcba0f, _0x5a7a54) => parseFloat(_0xdcba0f[_0x258e93(0x99)]) - parseFloat(_0x5a7a54[_0x258e93(0x99)])))) : (setOrderOfData('UP'), setData([...data][_0x258e93(0x97)]((_0x5cac82, _0x3008e6) => parseFloat(_0x3008e6[_0x258e93(0x99)]) - parseFloat(_0x5cac82[_0x258e93(0x99)])))); }
  return (
    <>
      <Layout subTitle=""
        pageTitle={title}
        show_button_order={true}
        handlechangeOrder={handlechangeOrder}
        orderOfData={orderOfData}
      >
        <div className="offer-v1 min-h-[55vh]">
          <div className="row">
            <div className="col-xl-12">
              <div className="card-body">
                <OfferHistory data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </>
  );
}

export default Blank;
