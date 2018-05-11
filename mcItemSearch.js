(function() {
    'use strict'
    window.onload = function() {

        const itemNameInput = document.getElementById('item-name');
        const searchButton = document.getElementById('search');
        const resultDivided = document.getElementById('result-area');
        const effects = [
            '「小麦」の効果は回復（♡３）です。',
            '「ブレイズパウダー」の効果は攻撃力アップです。',
            '「レンガ」の効果は防御力アップです。',
            '「エメラルド」の効果は蘇生です。',
            '「コーラスフラワー」の効果は全回復です。',
            '「ネザースター」の効果は無敵です。'
        ];
        
        searchButton.onclick = () => {
            const itemName = itemNameInput.value;
            if (itemName.length === 0) {
                return ;
            }
            
            while (resultDivided.firstChild) {
                resultDivided.removeChild(resultDivided.firstChild);
            }

            const header = document.createElement('h3');
            header.innerText = '検索結果';
            resultDivided.appendChild(header);

            const paragraph = document.createElement('p');
            const result = itemSearch(itemName);
            paragraph.innerText = result;
            resultDivided.appendChild(paragraph);

            if (itemName === 'こっぺぱん') {
                const iframe = document.createElement('iframe');
                const videoResult = itemSearch(itemName);
                iframe.width = 560;
                iframe.height = 315;
                iframe.frameBorder = 0;
                iframe.allow = "autoplay; encrypted-media"
                iframe.allowFullscreen;
                iframe.src="https://www.youtube.com/embed/eSsjSIz2NKY?rel=0";
                resultDivided.appendChild(iframe);
            }
        };
        
        
        /**
         * アイテム名の文字列を渡すと効果を表示する関数
         * @param {string} itemName アイテム名
         * @return {string} 効果
         */
        function itemSearch(itemName){
            let searchResult = null;
            if (itemName === '小麦') {
                searchResult = effects[0];
                return searchResult;
            }else if (itemName === 'ブレイズパウダー') {
                searchResult = effects[1];
                return searchResult;
            }else if (itemName === 'レンガ') {
                searchResult = effects[2];
                return searchResult;
            }else if (itemName === 'エメラルド') {
                searchResult = effects[3];
                return searchResult;
            }else if (itemName === 'コーラスフラワー') {
                searchResult = effects[4];
                return searchResult;
            }else if (itemName ==='ネザースター') {
                searchResult = effects[5];
                return searchResult;
            }else if (itemName === 'こっぺぱん') {
                searchResult = "https://www.youtube.com/embed/eSsjSIz2NKY?rel=0";
                return searchResult;
            }else {
                searchResult = 'そのアイテムは存在しません';
                return searchResult;
            }

        }
    };
        

})();