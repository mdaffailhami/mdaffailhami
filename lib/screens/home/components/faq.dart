import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/qna_card.dart';

class MyFAQ extends StatelessWidget {
  const MyFAQ({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('FAQ', style: Theme.of(context).textTheme.headlineMedium),
        const Divider(),
        const Wrap(
          alignment: WrapAlignment.center,
          spacing: 20,
          runSpacing: 12,
          children: [
            MyQnACard(
              question: 'Sejak kapan mulai belajar pemrograman?',
              answer: '12 September 2020, kelas 11 MA, & umur 16 tahun',
            ),
            MyQnACard(
              question:
                  'Sarannya dong channel YouTube buat belajar pemrograman yang mudah dipahami?',
              answer: 'Web Programming UNPAS dan Kelas Terbuka',
            ),
            MyQnACard(
              question: 'Teknologi apa yang dipakai untuk membangun web ini?',
              answer: 'Dart & Flutter 👍',
            ),
            MyQnACard(
              question: 'Hobinya apa aja?',
              answer:
                  'Thinking & questioning, speedcubing, learning a new thing by myself, and listening to Qur\'an recitation',
            ),
            MyQnACard(
              question:
                  'Hah, suka memikirkan & mempertanyakan? Pasti tipe kepribadiannya INTP?',
              answer:
                  'Absolutely, I\'m an INTP. So, tiada hari tanpa memikirkan & mempertanyakan tentang segala hal di dunia ini 👌',
            ),
            MyQnACard(
              question: 'Favorit manga atau anime?',
              answer:
                  'Frieren: Beyond Journey\'s End, Solo Leveling, Oshi no Ko, One Piece, The Agel Next Door Spoils Me Rotten, & Dr. STONE',
            ),
            MyQnACard(
              question:
                  'Bisa ngehack ga? Klo bisa, tolong hack dong IG ku yang dulu, soalnya passwordnya lupa wkwkw',
              answer: 'Gak..',
            ),
            MyQnACard(
              question:
                  'Klo ga bisa ngehack, truss tuh kode-kode yang diketik buat apaan coba?',
              answer: 'huh? Programmer sama Hacker itu beda zz 😑',
            ),
            MyQnACard(
              question:
                  'Oh iya kamu kan anak IT, klo gitu bisa benerin kulkas ga?',
              answer: 'huh 😑',
            ),
            MyQnACard(
              question:
                  'Lah huh apesih? Kan anak IT itu emang harus bisa gitu 🤔',
              answer: 'oOo 😌',
            ),
          ],
        ),
      ],
    );
  }
}
