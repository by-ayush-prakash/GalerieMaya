
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DDvkAKw-.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.LKfO71Us.js","/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe-legacy.B41q8epM.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.e0oXjN_E.js","/cdn/shopifycloud/checkout-web/assets/c1/4b4bc88f-legacy.ChMAb3Po.js","/cdn/shopifycloud/checkout-web/assets/c1/bfe75f31-legacy.6WcE7XQ8.js","/cdn/shopifycloud/checkout-web/assets/c1/2bac2c53-legacy.ppeNHpg5.js","/cdn/shopifycloud/checkout-web/assets/c1/9dba8418-legacy.yTPzHyCT.js","/cdn/shopifycloud/checkout-web/assets/c1/cb38e5c2-legacy.BUGoO8Xx.js","/cdn/shopifycloud/checkout-web/assets/c1/3d539943-legacy.pQAJg_OS.js","/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa-legacy.C2IxYzyo.js","/cdn/shopifycloud/checkout-web/assets/c1/d25d1b95-legacy.tHN2yyE4.js","/cdn/shopifycloud/checkout-web/assets/c1/b8733b27-legacy.1aHZzJ-i.js","/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c-legacy.ZRVKRsKd.js","/cdn/shopifycloud/checkout-web/assets/c1/08a3b809-legacy.DPE7Sqzh.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.CaetE03b.js","/cdn/shopifycloud/checkout-web/assets/c1/69fae6d4-legacy.Ch7zCe1h.js","/cdn/shopifycloud/checkout-web/assets/c1/f67abd2c-legacy.BbHfnNx3.js","/cdn/shopifycloud/checkout-web/assets/c1/e12db40c-legacy.D0VVxgPQ.js","/cdn/shopifycloud/checkout-web/assets/c1/60a453ce-legacy.BTVcSPac.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.D2iL_qrR.js","/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6-legacy.DfFCzQGI.js","/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34-legacy.b_XI8tPM.js","/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e-legacy.C86d-11W.js","/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811-legacy.C_C0lJo2.js","/cdn/shopifycloud/checkout-web/assets/c1/1a6c2867-legacy.BECuWam3.js","/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3-legacy.D2RxYJNG.js","/cdn/shopifycloud/checkout-web/assets/c1/22345fd4-legacy.9hmMdPet.js","/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b-legacy.C7djE04w.js","/cdn/shopifycloud/checkout-web/assets/c1/74835653-legacy.D-8PORZO.js","/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda-legacy.DlrbFUEP.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e-legacy.Dw5hYqMm.js","/cdn/shopifycloud/checkout-web/assets/c1/47b970b2-legacy.Br5dyqVx.js","/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1-legacy.D03wHQTM.js","/cdn/shopifycloud/checkout-web/assets/c1/efa0389a-legacy.BNTDVSIC.js","/cdn/shopifycloud/checkout-web/assets/c1/4b1c22b7-legacy.Bi5hF8Du.js","/cdn/shopifycloud/checkout-web/assets/c1/17425706-legacy.DAjIQ5v2.js","/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153-legacy.BLaTvkEM.js","/cdn/shopifycloud/checkout-web/assets/c1/e3e348f2-legacy.SUJtn2Gw.js","/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c-legacy.mOHOKfwg.js","/cdn/shopifycloud/checkout-web/assets/c1/78ab3dd0-legacy.CMd-Mbws.js","/cdn/shopifycloud/checkout-web/assets/c1/89e2d30a-legacy.BvPhiD4S.js","/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238-legacy.NysNlnes.js","/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8-legacy.mCuoJvQA.js","/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd-legacy.D4fe1hhb.js","/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8-legacy.DOqSblWU.js","/cdn/shopifycloud/checkout-web/assets/c1/55098bf1-legacy.CvgrpU2c.js","/cdn/shopifycloud/checkout-web/assets/c1/a422df8c-legacy.B0QowNUb.js","/cdn/shopifycloud/checkout-web/assets/c1/f49d4216-legacy.B4tBGXFA.js","/cdn/shopifycloud/checkout-web/assets/c1/79974aab-legacy.uYKQUlyn.js","/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea-legacy.Cf7ZZ0_Z.js","/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80-legacy.DkBahXTh.js","/cdn/shopifycloud/checkout-web/assets/c1/f58f39d8-legacy.nF36CT9V.js","/cdn/shopifycloud/checkout-web/assets/c1/e03065ab-legacy.CItvWBmi.js","/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714-legacy.C0fAL372.js","/cdn/shopifycloud/checkout-web/assets/c1/39921a74-legacy.CELp_Cr_.js","/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd-legacy.Ca8B91sN.js","/cdn/shopifycloud/checkout-web/assets/c1/c6b02d73-legacy.B3Pj1IiX.js","/cdn/shopifycloud/checkout-web/assets/c1/ec391382-legacy.DZapSSt0.js","/cdn/shopifycloud/checkout-web/assets/c1/24773686-legacy.BL_smJLd.js","/cdn/shopifycloud/checkout-web/assets/c1/2210eadb-legacy.CbrxxALo.js","/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a-legacy.CqPbiN_u.js","/cdn/shopifycloud/checkout-web/assets/c1/6bfea526-legacy.B8jeQPYS.js","/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff-legacy.BCkqcDOa.js","/cdn/shopifycloud/checkout-web/assets/c1/598fef4e-legacy.BSKK5pBs.js","/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0-legacy.BLXjS8kG.js","/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d-legacy.Crinqbn3.js","/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c-legacy.DHNNFHJQ.js","/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5-legacy.kX_NhNFd.js","/cdn/shopifycloud/checkout-web/assets/c1/dae24aab-legacy.CMb0-eiU.js","/cdn/shopifycloud/checkout-web/assets/c1/ddf59287-legacy.DxxVLWQa.js","/cdn/shopifycloud/checkout-web/assets/c1/01973ac7-legacy.DumlOmGB.js","/cdn/shopifycloud/checkout-web/assets/c1/58314944-legacy.CvCokWF4.js","/cdn/shopifycloud/checkout-web/assets/c1/945a08d6-legacy.3rCYCN7C.js","/cdn/shopifycloud/checkout-web/assets/c1/7bc8057b-legacy.DDQkyEUT.js","/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a-legacy.avPjBH7J.js","/cdn/shopifycloud/checkout-web/assets/c1/2b89a178-legacy.kNHDzXvF.js","/cdn/shopifycloud/checkout-web/assets/c1/b684bff6-legacy.Bi90DWWt.js","/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2-legacy.B3XruFxr.js","/cdn/shopifycloud/checkout-web/assets/c1/347b440c-legacy.BxgQ_h0a.js","/cdn/shopifycloud/checkout-web/assets/c1/9ce08e25-legacy.BrUzP94-.js","/cdn/shopifycloud/checkout-web/assets/c1/181d38d3-legacy.NSUDugva.js","/cdn/shopifycloud/checkout-web/assets/c1/792bb671-legacy.Bm978H5T.js","/cdn/shopifycloud/checkout-web/assets/c1/9ca7d819-legacy.BdwCT82p.js","/cdn/shopifycloud/checkout-web/assets/c1/f51e663e-legacy.BpKa2LV-.js","/cdn/shopifycloud/checkout-web/assets/c1/21cc90a2-legacy.HPm1WO51.js","/cdn/shopifycloud/checkout-web/assets/c1/64de7b49-legacy.BZRhP94m.js","/cdn/shopifycloud/checkout-web/assets/c1/ca0c3e72-legacy.DPRpk7Wt.js","/cdn/shopifycloud/checkout-web/assets/c1/8e79be58-legacy.DtwymV0S.js","/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f-legacy.BkhRPobp.js","/cdn/shopifycloud/checkout-web/assets/c1/31cc568e-legacy.DLFKTecT.js","/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da-legacy.BTzLamgy.js","/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49-legacy.DLGIqSeg.js","/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa-legacy.BWVgkI76.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.CE9frpTy.js","/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c-legacy.ir9Ztn2i.js","/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0-legacy.B_tM9UQf.js","/cdn/shopifycloud/checkout-web/assets/c1/25604ae0-legacy.7Puexo9W.js","/cdn/shopifycloud/checkout-web/assets/c1/dada7e07-legacy.nSXBFdwq.js","/cdn/shopifycloud/checkout-web/assets/c1/86720dbb-legacy.DD0zdEp8.js","/cdn/shopifycloud/checkout-web/assets/c1/f692f62f-legacy.DbOLp5aB.js","/cdn/shopifycloud/checkout-web/assets/c1/9babe369-legacy.iXN3Kisp.js","/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a-legacy.Crya1c9b.js","/cdn/shopifycloud/checkout-web/assets/c1/e0989459-legacy.DZ-pNtm1.js","/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6-legacy.DtCVwC7Y.js","/cdn/shopifycloud/checkout-web/assets/c1/fc21c11a-legacy.BpHMARZH.js","/cdn/shopifycloud/checkout-web/assets/c1/e129c76e-legacy.078vb-nl.js","/cdn/shopifycloud/checkout-web/assets/c1/d4ea2faa-legacy.BiccKvKo.js","/cdn/shopifycloud/checkout-web/assets/c1/fe885b80-legacy.DOG5J5fJ.js","/cdn/shopifycloud/checkout-web/assets/c1/f78726c8-legacy.BQHVI5cD.js","/cdn/shopifycloud/checkout-web/assets/c1/e477f96c-legacy.DbLqiBr_.js","/cdn/shopifycloud/checkout-web/assets/c1/d7065744-legacy.U1xjwtJ5.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43-legacy.Cvx5MGo7.js","/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074-legacy.C1GSFgwS.js","/cdn/shopifycloud/checkout-web/assets/c1/8fe56fc9-legacy.0NXk0QjT.js","/cdn/shopifycloud/checkout-web/assets/c1/87bfafec-legacy.B6ff9fh_.js","/cdn/shopifycloud/checkout-web/assets/c1/051149c8-legacy.iFNzX2-Q.js","/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587-legacy.CqbLd-lq.js","/cdn/shopifycloud/checkout-web/assets/c1/c10167e6-legacy.dOcCIgnv.js","/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a-legacy.ZYa1v2_g.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1-legacy.SeEA5ngP.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0661/1809/0999/files/NEW_LOGO_MAYA_x320.png?v=1662647504"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  