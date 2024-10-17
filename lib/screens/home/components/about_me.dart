import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mdaffailhami/widgets/socmed_icon_button.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  static const List<MySocmedIconButton> socmedIconButtons = [
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.linkedin),
      tooltip: 'LinkedIn',
      url: 'https://linkedin.com/in/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.github),
      tooltip: 'GitHub',
      url: 'https://github.com/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.kaggle),
      tooltip: 'Kaggle',
      url: 'https://kaggle.com/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.instagram),
      tooltip: 'Instagram',
      url: 'https://instagram.com/m.daffailhami',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: const BorderRadius.only(
        bottomLeft: Radius.circular(10),
        bottomRight: Radius.circular(10),
      ),
      child: Material(
        color: Theme.of(context).colorScheme.surfaceBright,
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * 0.06,
            vertical: 20,
          ),
          child: Center(
            child: SizedBox(
              width: 600,
              child: Column(
                children: [
                  RichText(
                    text: TextSpan(
                      style: Theme.of(context)
                          .textTheme
                          .titleSmall
                          ?.copyWith(fontSize: 15),
                      children: [
                        const TextSpan(
                          text: "Hi, I’m ",
                          style: TextStyle(
                              fontSize: 22, fontWeight: FontWeight.bold),
                        ),
                        TextSpan(
                          text: "Daffa Ilhami 👋\n",
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.secondary,
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const TextSpan(
                            text:
                                """I’m a passionate programmer, speedcuber, and software engineer from Indonesia. I thrive on thinking and pondering new ideas, always seeking to challenge myself and grow.

Currently, I’m embarking on an exciting journey to become a data scientist, leveraging my self-taught skills and experience to dive deep into the field of data science 📖🔭.

My journey is driven by self-learning, deep curiosity, and a commitment to continuous personal growth. I’ve taught myself a variety of skills, and each day presents a new opportunity to explore, innovate, and push the boundaries of what I know. I am always eager to tackle new challenges and explore new technologies."""),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 22),
                  const Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 50,
                    runSpacing: 15,
                    children: socmedIconButtons,
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
