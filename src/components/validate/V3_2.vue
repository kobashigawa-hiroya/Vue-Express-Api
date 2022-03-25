<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <input type="text" v-model="second_name" />
  <p>{{ second_name }}</p>
  <input type="text" v-model="first_name" />
  <p>{{ first_name }}</p>

  <pre>
input要素を追加しref関数を利用してリアクティブデータsecond_nameを定義してv-modelの設定を行います。
ref関数を利用するためにはimportが必要です。

&lt;input type="text" v-model="second_name" /&gt;
&lt;p&gt;｛｛second_name｝｝&lt;/p&gt;
&lt;input type="text" v-model="first_name" /&gt;
&lt;p&gt;｛｛first_name｝｝&lt;/p&gt;

&lt;script&gt;
import { ref } from 'vue';
export default {
  setup() {
    const second_name = ref('second_name');
    const first_name = ref('first_name');
    return {
      second_name,
      first_name,
    };
  },
};
&lt;/script&gt;
  </pre>

</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const second_name  = ref('second_name');
    const first_name = ref('first_name');
    return {
      second_name,
      first_name,
    };
  },
};
</script>