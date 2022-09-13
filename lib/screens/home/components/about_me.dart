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
      icon: FaIcon(FontAwesomeIcons.github),
      tooltip: 'GitHub',
      url: 'https://github.com/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.instagram),
      tooltip: 'Instagram',
      url: 'https://www.instagram.com/m.daffailhami/',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.quora),
      tooltip: 'Quora',
      url: 'https://id.quora.com/profile/Daffa-Ilhami',
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
        color: Theme.of(context).colorScheme.surface,
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * 0.06,
            vertical: 20,
          ),
          child: Center(
            child: SizedBox(
              width: 400,
              child: Column(
                children: [
                  RichText(
                    text: TextSpan(
                      style: Theme.of(context)
                          .textTheme
                          .subtitle2
                          ?.copyWith(fontSize: 15),
                      children: [
                        TextSpan(
                          text: "Hello! ",
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                        ),
                        const TextSpan(
                          text: "I'm Daffa Ilhami.\n",
                        ),
                        const TextSpan(
                          text:
                              "I'm a Programmer from Barabai, Indonesia.\nI started to learn Programming since 12 September 2020, and then yeah now that's become my hobby.",
                        ),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  Wrap(
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
