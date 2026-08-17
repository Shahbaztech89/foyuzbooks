# فونٹس / Fonts

اس ویب سائٹ کو **Jameel Noori Nastaleeq** (اردو) اور **Al Qalam Quran Majeed Web** (عربی) کے لیے تیار کیا گیا ہے۔
کاپی رائٹ کی وجہ سے یہ فونٹ فائلیں اس پراجیکٹ میں شامل نہیں کی گئیں — آپ کو یہ خود ڈاؤن لوڈ کر کے اس فولڈر میں رکھنی ہوں گی۔

## کیا کرنا ہے

1. یہ فونٹس آفیشل/مستند ذرائع سے حاصل کریں (بہت سی ویب سائٹس یہ مفت فراہم کرتی ہیں، صرف لائسنس شرائط ضرور پڑھ لیں):
   - **Jameel Noori Nastaleeq** — `.ttf` یا `.woff2`
   - **Al Qalam Quran Majeed Web** — `.ttf` یا `.woff2`
2. فائلوں کے نام بالکل ان ناموں سے میچ کریں (یا نیچے دیے گئے `style.css` کے راستے خود تبدیل کر لیں):

```
assets/fonts/JameelNooriNastaleeq.woff2
assets/fonts/JameelNooriNastaleeq.woff
assets/fonts/JameelNooriNastaleeq.ttf
assets/fonts/AlQalamQuranMajeedWeb.woff2
assets/fonts/AlQalamQuranMajeedWeb.woff
assets/fonts/AlQalamQuranMajeedWeb.ttf
```

3. اگر آپ کے پاس صرف `.ttf` فائل ہے تو یہ ویب سائٹ بغیر کسی تبدیلی کے چل جائے گی (ٹی ٹی ایف فارمیٹ کو `@font-face` میں شامل کیا جا چکا ہے) — بہتر لوڈنگ اسپیڈ کے لیے آپ [Transfonter](https://transfonter.org/) جیسی مفت ویب سائٹ سے `.woff2` بھی بنوا سکتے ہیں۔

## اگر آپ فونٹ فائل نہ رکھیں تو کیا ہوگا؟

کوئی مسئلہ نہیں — ہر صفحہ کے `<head>` میں **Google Fonts** سے *Noto Nastaliq Urdu* (اردو کے لیے) اور *Amiri* (عربی کے لیے) بطور فال بیک پہلے سے لوڈ ہو رہے ہیں، تو فونٹ فائل شامل کرنے سے پہلے بھی سائٹ صحیح اور خوبصورت نظر آئے گی۔ جیسے ہی آپ اصل فونٹ فائلیں شامل کریں گے، سائٹ خودکار طور پر Jameel Noori Nastaleeq / Al Qalam میں بدل جائے گی۔
