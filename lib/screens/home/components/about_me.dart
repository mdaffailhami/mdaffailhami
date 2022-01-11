import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

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
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Center(
            child: SizedBox(
              width: 400,
              child: Column(
                children: [
                  const Text(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu, vel sem nec, dictum facilisis elit. Phasellus quis semper mi, ut laoreet odio. Phasellus id sem dolor. Integer quis mi vitae orci pharetra viverra. Sed nibh dolor, suscipit imperdiet mauris vitae, venenatis lacinia quam.',
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 50,
                    runSpacing: 15,
                    children: [
                      IconButton(
                        icon: FaIcon(FontAwesomeIcons.instagram),
                        onPressed: () {},
                      ),
                      IconButton(
                        icon: FaIcon(FontAwesomeIcons.github),
                        onPressed: () {},
                      ),
                    ],
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
