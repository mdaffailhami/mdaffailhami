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
        Text('FAQ', style: Theme.of(context).textTheme.headline4),
        const Divider(),
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 20,
          runSpacing: 12,
          children: const [
            MyQnACard(
              question: 'Sejak kapan mulai belajar Programming?',
              answer: '12 September 2020, kelas 11, & umur 16 tahun',
            ),
            MyQnACard(
              question:
                  'Saran dong channel YouTube buat belajar Programming yang gampang dipahami?',
              answer: 'Web Programming UNPAS dan Kelas Terbuka',
            ),
            MyQnACard(
              question: 'Teknologi apa yang dipake untuk membangun web ini?',
              answer: 'Dart & Flutter 👍',
            ),
            MyQnACard(
              question: 'Kapan One Piece tamat?',
              answer: 'Mana saia tau, saia kan bukan Oda 🤨',
            ),
            MyQnACard(
              question:
                  'Bisa ngehack ga? Klo bisa tolong hack-in dong ig temenku, kita prank bareng muehehehh',
              answer: 'Gak..',
            ),
            MyQnACard(
              question:
                  'Klo ga bisa ngehack truss tuh kode-kode yang diketik buat apaan coba?',
              answer: 'huh? Programmer sama Hacker itu beda zz 😑',
            ),
            MyQnACard(
              question:
                  'Oh iya kamu kan anak IT, klo gitu bisa benerin kulkas ga?',
              answer: 'huh 😑',
            ),
            MyQnACard(
              question:
                  'Lah huh apesih? Kan nak IT itu emang harus bisa gitu 🤔',
              answer: 'oOo 😌',
            ),
          ],
        ),
      ],
    );
  }
}
